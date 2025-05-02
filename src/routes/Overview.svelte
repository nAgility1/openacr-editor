<script>
  import { onMount } from "svelte";
  import { Link, useLocation } from "svelte-navigator";
  import ExpandCollapseAll from "../components/ExpandCollapseAll.svelte";
  import Header from "../components/Header.svelte";
  import Pager from "../components/Pager.svelte";
  import PagerLink from "../components/PagerLink.svelte";
  import { currentPage } from "../stores/currentPage.js";
  import HeaderWithAnchor from "../components/HeaderWithAnchor.svelte";
  import { honourFragmentIdLinks } from "../utils/honourFragmentIdLinks.js";
  import { evaluation } from "../stores/evaluation.js";
  import { getCatalog } from "../utils/getCatalogs.js";

  const location = useLocation();
  let catalog = getCatalog($evaluation.catalog);

  onMount(() => {
    currentPage.update((currentPage) => "Overview");

    honourFragmentIdLinks($location);
  });
</script>

<svelte:head>
  <title>Overview | OpenACR Editor | GSA</title>
</svelte:head>

<Header>Overview</Header>

<p>
  This web editor helps evaluators build Accessibility Conformance Reports in the <a href="https://github.com/gsa/openacr" target="_blank">OpenACR format.<span class="visuallyhidden">(opens in a new window or tab)</span></a>
  It is designed to assist accessibility subject matter experts create machine-readable OpenACR documents. Authors will be guided in creating an
  accessible report for the digital product or service that they are documenting. Conformance for each requirement can be documented as required
  to generate a Section 508 report.
</p>

<p>Tips for using this tool:</p>

<ul>
  <li>
    This editor saves the information you enter locally in your browser (not on our servers). To save or share your OpenACR report, you must
    save it to your computer. You will need the YAML file to submit your OpenACR and to edit this report in the future.
  </li>
  <li>
    As you use the editor, the
    <Link to="report">Report</Link>
    page lists the success criteria that you have checked and not checked.
  </li>
  <li>
    You can export your report as YAML (structured data) or as HTML (web page). Note: You will not be able
    to edit the report in the future without the YAML file.
  </li>
  <li>
    Add limited formatting to your report with <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank">Markdown <span class="visuallyhidden">(opens in a new window or tab)</span></a>. This allows you to add
    lists, links and code examples.
  </li>
</ul>

<ExpandCollapseAll />

<details>
  <summary>
    <HeaderWithAnchor id="about-openacr" level=2>About OpenACR</HeaderWithAnchor>
  </summary>
  <p>
    OpenACR is a digital-native Accessibility Conformance Report (ACR) initially developed to meet Section 508 requirements. One of its 
    greatest advantages is its machine-readable format, enabling easier comparison of accessibility claims for digital products and 
    services. By transitioning to a highly structured, self-validated document format, accessibility documentation becomes more 
    consistent and efficient.
  </p>
  <p>
    Many organizations face challenges in delivering accessible services to people with disabilities. Currently, software vendors submit 
    ACRs for their products and services. However, these ACRs are typically in PDF format, which is often inaccessible, inconsistently 
    structured, and difficult to search. Modern ACRs will be validated to ensure they match a baseline format
  </p>
  <p>
    Responsible organizations review vendor conformance claims and conduct independent testing. Documenting these findings in a 
    consistent format streamlines feedback to vendors and simplifies report updates and comparisons.
  </p>
  <p>
    For more information, see <a href="https://github.com/GSA/openacr" target="_blank">OpenACR <span class="visuallyhidden">(opens in a new window or tab)</span></a>.
  </p>
</details>

<details>
  <summary>
    <HeaderWithAnchor id="structure-of-this-tool" level=2>Structure of this tool</HeaderWithAnchor>
  </summary>
  <p>
    Aligned with the OpenACR structure, this tool takes you through seven
    <strong>tables/chapters</strong>. Each table/chapter contains various
    <strong>criteria</strong>, divided into
    <strong>components</strong>. For each component, you can: Select a level 
    of conformance. Add a note about the conformance status.
  </p>
  <p>
    Levels: A, AA, AAA are for the <strong>WCAG 2</strong> guidelines.
  </p>
  <p>
    Categories: FPC, Hardware, Software, and Documentation align with the <strong>Section 508</strong> standards.
  </p>
  <p>
    Links in this editor open new windows leading to the relevant guideline sections.
  </p>
</details>

<details>
  <summary>
    <HeaderWithAnchor id="terms" level=2>Terms</HeaderWithAnchor>
  </summary>
  <p>
    When entering conformance information for your software, you will assign a "term" to each component. 
    Below is a legend of these terms:
  </p>
  <dl>
    {#each catalog.terms as term}
      <dt>{term.label}</dt>
      <dd>{term.description}</dd>
    {/each}
  </dl>
</details>

<Pager label="Previous/Next Principle">
  <PagerLink to="/about" direction="next">About</PagerLink>
</Pager>
