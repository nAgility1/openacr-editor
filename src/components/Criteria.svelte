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
  $: idtoDisplay = id ? (String(id).includes('-') ? String(id).split('-')[0] : id) : null;
  $: toDisplay = idtoDisplay && idtoDisplay != '0.0.0'|| '503.4.0' || '503.4.1' || '503.4.2' ? true : false;
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
      <HeaderWithAnchor id="{id}" level=2 url="{url}">{#if isAorAAorAAA && toDisplay}WCAG SC {/if} {toDisplay ? idtoDisplay + ':': 'WCAG'} {handle}</HeaderWithAnchor>
    </summary>
    {#if !disabled}
      <span class="observation__meta">
        <Link to={`/report#${alt_id}-editor`}>
          View in Report
        </Link>
      </span>
    {/if}
    <LinkToGuidance href={linkToImplementing}>Implementing {id}: {isAorAAorAAA ? handle: handle}</LinkToGuidance>
    {#if components}
      {#each components as c}
        <Component chapterId={chapterId} criteria={id} component={c} />
      {/each}
    {/if}
  </details>
</div>
