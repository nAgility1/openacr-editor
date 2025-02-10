<script>
  import HeaderWithAnchor from "./HeaderWithAnchor.svelte";
  import { Link } from "svelte-navigator";
  import Component from "./Component.svelte";
  import LinkToGuidance from "./LinkToGuidance.svelte";
  export let chapterId;
  export let chapterLink;
  export let id;
  export let short_label;
  export let url;
  export let alt_id;
  export let handle;
  export let components = [];
  import { evaluation } from "../stores/evaluation.js";

  $: linkToImplementing = `${chapterLink}#${alt_id}`;
  $: disabled = ($evaluation['chapters'][chapterId]['disabled']) ? 'disabled' : '';
  $: isAorAAorAAA = short_label === 'A' || short_label === 'AA' || short_label === 'AAA' || short_label === 'A-AA';
  // parse out the extra hyphen letter if it was added for preventing duplicates
  $: idNum = id ? (String(id).includes('-') ? String(id).split('-')[0] : id) : '';
  $: section508id = String(id).includes('503') ? (String(id).includes('503.4.0') ? '503.4' : String(id)) : '';
  $: toDisplay = (idNum && idNum != ('0.0.0' || '5.0.0')) ? true : false;
  $: conformancetext = (idNum == '5.0.0') ? 'WCAG Conformance Requirement 5' : '';
  $: idtoDisplay = section508id ? ('Section 508 ' + section508id) : (conformancetext ? conformancetext : idNum);
</script>

<style>
  .criteria {
    margin-bottom: 2em;
  }
  .observation__meta {
    margin-left: auto;
    font-size: smaller;
    align-self: baseline;
    float: right;
  }
</style>

<div {id} class="criteria">
  <details>
    <summary>
      <HeaderWithAnchor id="{id}" level=2 url="{url}">{#if isAorAAorAAA && toDisplay && !section508id && !conformancetext}WCAG SC {/if} {toDisplay ? idtoDisplay + ':': 'WCAG'} {handle}</HeaderWithAnchor>
    </summary>
    {#if !disabled}
      <span class="observation__meta">
        <Link to={`/report#${alt_id}-editor`}>
          View in Report
        </Link>
      </span>
    {/if}
    <LinkToGuidance href={linkToImplementing}>Implementing {id}: {handle}</LinkToGuidance>
    {#if components}
      {#each components as c}
        <Component chapterId={chapterId} criteria={id} component={c} />
      {/each}
    {/if}
  </details>
</div>
