<script>
  import { onMount } from "svelte";
  import { useLocation } from "svelte-navigator";
  import Header from "../components/Header.svelte";
  import DTWithAnchor from "../components/DTWithAnchor.svelte";
  import { currentPage } from "../stores/currentPage.js";
  import { honourFragmentIdLinks } from "../utils/honourFragmentIdLinks.js";

  const location = useLocation();

  onMount(() => {
    currentPage.update(currentPage => "Glossary");

    honourFragmentIdLinks($location);
  });
</script>

<svelte:head>
  <title>Glossary| OpenACR Editor | GSA</title>
</svelte:head>

<Header>Glossary</Header>

<p>
  A glossary of terms related to OpenACR.
</p>

<dl>
  <DTWithAnchor id="accessibility">Accessibility</DTWithAnchor>
  <dd>The measure of a web page's usability by persons with one or more disabilities.</dd>
  <DTWithAnchor id="accessibility-conformance-report">Accessibility Conformance Report (ACR)</DTWithAnchor>
  <dd>A description how the offering addresses all of the accessibility requirements outlined in the solicitation and the
    evaluation methods used to validate the findings.</dd>
  <DTWithAnchor id="accessibility-maturity-model">Accessibility Maturity Model</DTWithAnchor>
  <dd>An assessment of an organization's understanding and capacity to address accessibility. This often includes ensuring 
    that the organization includes people with disabilities on staff, including in positions of responsibility.</dd>
  <DTWithAnchor id="accessibility-statement">Accessibility Statement</DTWithAnchor>
  <dd>A written confirmation of an organization's commitment to being more inclusive for people with disabilities. This usually provides information 
    about accessibility goals and efforts to achieve them. Often, links to ACRs are included if the organization sells products or services.</dd>
  <DTWithAnchor id="accommodations">Accommodations</DTWithAnchor>
  <dd>The modification of a product or service so that an individual can perform job functions efficiently and safely. This is often needed
    if a product fails to meet Section 508 requirements. Accommodations after the fact are always more expensive than building an accessible solution.</dd>
  <DTWithAnchor id="assistive-technologies">Assistive technologies</DTWithAnchor>
  <dd>Technology designed to provide people with disabilities greater functional capabilities with computer-based systems. This could include software 
    or hardware and often benefits a broader range of users.</dd>
  <DTWithAnchor id="americans-with-disabilities-act-of-1990-ada">Americans with Disabilities Act of 1990 (ADA)</DTWithAnchor>
  <dd>A United States civil rights law that prohibits discrimination based on disability.</dd>
  <DTWithAnchor id="automated-testing">Automated Testing</DTWithAnchor>
  <dd>Software tools that test for many accessibility barriers. While essential for developing and maintaining software, no automated tool can check 
    for all Section 508 requirements. Automated testing is a necessary but insufficient part of an effective testing strategy.</dd>
  <DTWithAnchor id="barrier">Barrier</DTWithAnchor>
  <dd>Software tools that test for many accessibility barriers. While essential for developing and maintaining software, no automated tool can check for 
    all Section 508 requirements. Automated testing is a necessary but insufficient part of an effective testing strategy.</dd>
  <DTWithAnchor id="commerical-off-the-shelf-cots">Commercial off-the-shelf (COTS)</DTWithAnchor>
  <dd>Software that can be purchased and implemented with little or no customization requirements.</dd>
  <DTWithAnchor id="content-management-system-cms">Content management system (CMS)</DTWithAnchor>
  <dd>A software application used to oversee the operation of web information. Common CMS applications include WordPress and Drupal.</dd>
  <DTWithAnchor id="customer-experiece-cx-human-centered-design-hcd">Customer Experience (CX) / Human Centered Design (HCD)</DTWithAnchor>
  <dd>The totality of cognitive, affective, sensory, and behavioral responses during all stages of the process. Effective CX and HCD also
    includes people with disabilities.</dd>
  <DTWithAnchor id="disability">Disability</DTWithAnchor>
  <dd>Any impairment—physical, mental, intellectual, cognitive, learning, communication, or sensory, whether permanent, temporary, episodic, or 
    evident or not—that, in interaction with a barrier, hinders a person's full and equal participation in society. </dd>
  <DTWithAnchor id="discoverability">Discoverability</DTWithAnchor>
  <dd>The ability of a feature to be easily found in the context in which it is needed.</dd>
  <DTWithAnchor id="european-harmonized-accessibility-standards-en-301-549">European Harmonized Accessibility Standards (EN 301 549)</DTWithAnchor>
  <dd>An evolving global standard for government policy that roughly follows and extends WCAG Guidelines.</dd>
  <DTWithAnchor id="false-positives">False positives</DTWithAnchor>
  <dd>AAn error in data reporting where a test result improperly indicates the presence of a condition.</dd>
  <DTWithAnchor id="government-off-the-shelf-cots">Government off-the-shelf (COTS)</DTWithAnchor>
  <dd>IT which is developed and maintained by the government</dd>
  <DTWithAnchor id="government-product-accessibility-template-gpat">Government Product Accessibility Template (GPAT)</DTWithAnchor>
  <dd>A legacy ACR developed by a government agency. This template is no longer maintained.</dd>
  <DTWithAnchor id="graceful-degradation">Graceful degradation</DTWithAnchor>
  <dd>A design approach where a site retains content effectiveness even if new technology features are disabled.</dd>
  <DTWithAnchor id="internationalization">Internationalization</DTWithAnchor>
  <dd>A system designed to work in multiple languages and cultural contexts across different locales.</dd>
  <DTWithAnchor id="information-communications-technology-ict">Information Communications Technology (ICT)</DTWithAnchor>
  <dd>ICT is an extension of information technology (IT), referring to the gamut of technology involved in digital communications.</dd>
  <DTWithAnchor id="lived-experience">Lived Experience</DTWithAnchor>
  <dd>Testing conducted with people who have firsthand experience of disability, which is ultimately the most valuable form of testing.</dd>
  <DTWithAnchor id="localization">Localization</DTWithAnchor>
  <dd>Customizing or adapting a national or international product for a local market.</dd>
  <DTWithAnchor id="manual-testing">Manual Testing</DTWithAnchor>
  <dd>With minimal training, most people can perform basic testing using only a keyboard, without a mouse. With further training, users 
    can gain a general understanding of how to use other assistive technologies. Effective screen reader testing often requires considerable 
    experience.</dd>
  <DTWithAnchor id="medical-model-of-disability">Medical model of disability</DTWithAnchor>
  <dd>An understanding of disability based on a biomedical perception. It links a disability diagnosis to an individual's physical condition, 
    aiming to diminish or correct the disability through medical intervention.</dd>
  <DTWithAnchor id="open-source-software-oss">Open Source Software (OSS)</DTWithAnchor>
  <dd>Software made freely available for modification and redistribution. Products include permission to use the source code, design documents, 
    or content.</dd>
  <DTWithAnchor id="section-504">Section 504</DTWithAnchor>
  <dd>Section 504 of the Rehabilitation Act of 1973 mandates accommodations in the workplace and applies to entities receiving federal assistance. 
    Any organization that receives federal support, regardless of whether it is a federal or state entity, is required to comply with the 
    provisions of Section 504.</dd>
  <DTWithAnchor id="section-508">Section 508</DTWithAnchor>
  <dd>Section 508 of the Rehabilitation Act was established to remove barriers in information technology, create new opportunities for 
    individuals with disabilities, and promote the development of technologies that support these objectives. The law applies to all 
    federal agencies in the development, procurement, maintenance, or use of electronic and information technology. Prior to the Section 508 
    Refresh, these requirements were based on the best practices established in 1998.</dd>
  <DTWithAnchor id="section-508-refresh">Section 508 Refresh</DTWithAnchor>
  <dd>An update aligning U.S. guidelines with WCAG 2.0 AA standards.</dd>
  <DTWithAnchor id="semantics">Semantics</DTWithAnchor>
  <dd>Semantics refers to enhancing the meaning of information in digital content, making it easier for devices to interpret the purpose of each 
    element for the end user. HTML5 markup has been designed to help developers create more meaningful and semantic code.</dd>
  <DTWithAnchor id="social-model-of-disability">Social model of disability</DTWithAnchor>
  <dd>An approach to understanding disability that focuses on systemic barriers, negative attitudes, and social exclusion—whether intentional or 
    unintentional—that hinder or prevent people with disabilities from fully participating and functioning in society.</dd>
  <DTWithAnchor id="software-as-a-service-saas">Software as a service (SaaS)</DTWithAnchor>
  <dd>A software licensing and delivery model where software is centrally hosted and licensed on a subscription basis.</dd>
  <DTWithAnchor id="usability">Usability</DTWithAnchor>
  <dd>The principle that information and applications should not only be accessible but also easy to use and understand.</dd>
  <DTWithAnchor id="voluntary-product-accessibility-template-vpat">Voluntary Product Accessibility Template (VPAT™)</DTWithAnchor>
  <dd>The most widely used ACR format, maintained by the Information Technology Industry Council, is the VPAT (Voluntary Product Accessibility Template). 
    This static document outlines how software, hardware, electronic content, and support documentation meet accessibility standards. VPATs are commonly 
    required during procurement to help buyers assess a product's accessibility and identify any shortcomings.</dd>
  <DTWithAnchor id="web-content-accessibility-guidelines-wcag">Web Content Accessibility Guidelines (WCAG) 2.0, 2.1, 2.2 & 3.0</DTWithAnchor>
  <dd>WCAG 2.0 establishes an international technical standard for web content accessibility. It includes 12 guidelines grouped under four key principles: 
    Perceivable, Operable, Understandable, and Robust (POUR). Each guideline features testable success criteria categorized into three levels: 
    A, AA, and AAA. The most recent version is 2.1, with 2.2 nearing publication, and 3.0 currently under active development.</dd>
  <DTWithAnchor id="widget">Widget</DTWithAnchor>
  <dd>A widget is a small application embedded in websites to serve various purposes. Examples include an email newsletter signup form or a third-party 
    live chat feature.</dd>
</dl>
