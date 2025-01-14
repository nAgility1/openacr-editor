/// <reference types="Cypress" />

const catalogs = ["2.5-edition-wcag-2.1-508-en", "2.5-edition-wcag-2.2-508-en"];
const chapters = [
  "success_criteria_level_a",
  // "success_criteria_level_aa",
  "success_criteria_level_aaa",
];
const wcag22Criteria = "2.2.5";

describe("Catalogs", () => {
  catalogs.forEach((catalog) => {
    it(`select catalog ${catalog}, confirm and can load WCAG chapters and report without errors`, () => {
      cy.visit("/about");

      cy.get("button").contains("Switch Catalogs").should("be.disabled");

      cy.get(`input[value="${catalog}"]`).check();

      cy.get("p").should(
        "contain",
        "Select Switch Catalogs to save your new selection."
      );

      cy.get("button").contains("Switch Catalogs").click();

      chapters.forEach((chapter) => {
        cy.visit(`/chapter/${chapter}`, {
          onBeforeLoad(win) {
            cy.stub(win.console, "error").as("consoleError");
          },
        });
        cy.get("@consoleError").should("not.be.called");
      });

      cy.visit("/report", {
        onBeforeLoad(win) {
          cy.stub(win.console, "error").as("consoleError");
        },
      });
      cy.get("@consoleError").should("not.be.called");
    });
  });

  it("toggle catalog, confirm and check for WCAG 2.2 criteria appearing and disappearing", () => {
    cy.visit("/about");

    // Switch to WCAG 2.2 catalog.
    cy.get("input[value='2.5-edition-wcag-2.2-508-en']").check();

    cy.get("button").contains("Switch Catalogs").click();

    cy.visit("/chapter/success_criteria_level_a");

    cy.get(`div[id="${wcag22Criteria}"]`).should("exist");

    cy.get("button").contains("View Report").click();

    cy.get("#success_criteria_level_a-editor + table tbody tr").should(
      "contain",
      wcag22Criteria
    );

    cy.visit("/about");

    // Switch back to WCAG 2.1 508 catalog.
    cy.get("input[value='2.5-edition-wcag-2.1-508-en']").check();

    cy.get("button").contains("Switch Catalogs").click();

    cy.visit("/chapter/success_criteria_level_a");

    cy.get(`div[id="${wcag22Criteria}"]`).should("not.exist");

    cy.get("button").contains("View Report").click();

    cy.get("#success_criteria_level_a-editor + table tbody tr").should(
      "not.contain",
      wcag22Criteria
    );
  });

  it("toggle catalog, click confirm and see a confirmation dialog", () => {
    cy.visit("/about");

    cy.on("window:confirm", cy.stub().as("confirmation"));

    // Switch to WCAG 2.2 catalog.
    cy.get("input[value='2.5-edition-wcag-2.2-508-en']").check();

    cy.get("button").contains("Switch Catalogs").click();

    cy.get("@confirmation")
      .should("have.been.calledOnce")
      .and(
        "have.been.calledWith",
        "Switching catalogs may remove entered data and notes from your ACR that are not part of the newly selected catalog.\n\nPlease download your report before switching catalogs to avoid losing information. Select Cancel to save before switching."
      );
  });

  it("toggle catalog and reset it", () => {
    cy.visit("/about");

    // Switch to WCAG 2.2 catalog.
    cy.get("input[value='2.5-edition-wcag-2.2-508-en']").check();

    cy.get("button").contains("Reset").click();

    cy.get(`input[value="2.5-edition-wcag-2.2-508-en"]`).should("be.checked");
  });

  it("toggle catalog and cancel confirmation", () => {
    cy.visit("/about");

    // Cancel the confirmation of toggling the catalog.
    cy.on("window:confirm", () => false);

    // Switch to WCAG 2.2 catalog.
    cy.get("input[value='2.5-edition-wcag-2.2-508-en']").check();

    cy.get("button").contains("Switch Catalogs").click();

    cy.get("button").contains("View Report").click();

    cy.get("#content").should(
      "contain",
      "Based on VPAT® 2.5 WCAG 2.2 and Revised Section 508 Edition"
    );
  });
});
