<script>
  import { onMount } from "svelte";
  import { useLocation } from "svelte-navigator";
  import Header from "./Header.svelte";
  import HelpText from "../components/HelpText.svelte";
  import Criteria from "./Criteria.svelte";
  import LinkToGuidance from "./LinkToGuidance.svelte";
  import Pager from "./Pager.svelte";
  import PagerLink from "./PagerLink.svelte";
  import { currentPage } from "../stores/currentPage.js";
  import { honourFragmentIdLinks } from "../utils/honourFragmentIdLinks.js";
  import ChapterHelpText from "../components/ChapterHelpText.svelte";
  import { evaluation } from "../stores/evaluation.js";
  import ExpandCollapseAll from "../components/ExpandCollapseAll.svelte";
  import { getCatalog } from "../utils/getCatalogs.js";

  export let chapterId = null;
  export let className = undefined;
  let catalog = getCatalog($evaluation.catalog);
  let standards = catalog.standards;
  let chapters = catalog.chapters;

  function renderCriteria(criteriaId) {
    try {
      const criteria = currentChapter.criteria.find(c => c.id === criteriaId);
      if (!criteria) {
        console.warn(`Criteria not found for ID: ${criteriaId}`);
        return {};
      }
      if (criteria) {
        return {
          short_label: currentChapter.short_label,
          url: criteria.id || null,
          chapterId: chapterId,
          chapterLink: currentStandard.url,
          ...criteria
        };
      }
    } catch (error) {
      console.error(`Error rendering criteria ${criteriaId}:`, error);
      return {};
    }
  }

  // reactive statements and lifecycle methods
  const location = useLocation();
  // **** Add the following debug to check duplicate IDs in yaml
  $: currentChapter = chapters.find( ({ id }) => id === chapterId);
  $: {
    console.log('Criteria IDs:', currentChapter.criteria.map(c => c.id));
    const duplicateIds = currentChapter.criteria
      .map(c => c.id)
      .filter((id, index, array) => array.indexOf(id) !== index);
    console.log('Duplicate IDs:', duplicateIds);
  }
  // **** End the following debug to check duplicate IDs in yaml
  $: currentChapterKey = chapters.findIndex( ({ id }) => id === chapterId);
  $: currentStandard = standards.find( ({ chapters }) => chapters.includes(chapterId));

  onMount(() => {
    currentPage.update(currentPage => "Evaluation");

    honourFragmentIdLinks($location);
  });

</script>

<svelte:head>
  <title>{currentChapter.label} | OpenACR Editor | GSA</title>
</svelte:head>

<div class={className}>
  <Header>{currentChapter.label}</Header>

  <p>
    <LinkToGuidance href={currentStandard.url}>
      {currentStandard.label}
    </LinkToGuidance>
  </p>

  <ChapterHelpText chapterId={currentChapter.id} />

  <div class="field">
    <label for="evaluation-chapter-notes">Notes</label>
    <textarea
      bind:value={$evaluation['chapters'][chapterId]['notes']}
      id="evaluation-chapter-notes"
      cols="20"
      rows="5"
      on:change={() => evaluation.updateCache($evaluation)} />
    <HelpText type="chapters" field="notes" />
  </div>

  <div class="field">
    <label>
      <input
        type="checkbox"
        value={chapterId}
        bind:checked="{$evaluation['chapters'][chapterId]['disabled']}"
        id="evaluation-disabled-chapter-{chapterId}"
        on:change={() => evaluation.updateCache($evaluation)} />

      Disabled?
    </label>
    <HelpText type="disabled_chapters" field="{chapterId}" />
  </div>

  <ExpandCollapseAll />

  {#if chapterId === "success_criteria_level_a" && (currentChapter.short_label === "A" || currentChapter.short_label === "A-AA") }
  {#each currentChapter.criteria as criteria, i (criteria.id)}
    {#if criteria.description }
          <h2 id={criteria.description}>{criteria.description}</h2>
        {/if}
        <Criteria 
          short_label={currentChapter.short_label} 
          url={criteria.handle ? criteria.handle.substring(criteria.handle.indexOf('-') + 1) : null} 
          chapterId={chapterId} 
          chapterLink={currentStandard.url} 
          id={criteria.id}
          alt_id={criteria.alt_id}
          handle={criteria.handle ? criteria.handle.substring(0, criteria.handle.indexOf('-https')) : criteria.handle}
          components={criteria.components}/>
    {/each}
  {:else if chapterId === "success_criteria_level_aa" && currentChapter.short_label === "AA"}
    {#each currentChapter.criteria as criteria, i (criteria.id)}
        {#if criteria.description }
          <h2 id={criteria.description}>{criteria.description}</h2>
        {/if}
        <Criteria 
          short_label={currentChapter.short_label} 
          url={criteria.handle ? criteria.handle.substring(criteria.handle.indexOf('-') + 1) : null} 
          chapterId={chapterId} 
          chapterLink={currentStandard.url} 
          id={criteria.id}
          alt_id={criteria.alt_id}
          handle={criteria.handle}
          components={criteria.components}/>
    {/each}
  {:else}
    {#each currentChapter.criteria as criteria, i (criteria.id)}
      <Criteria short_label={currentChapter.short_label} url={i.handle ? criteria.substring(criteria.indexOf('-') + 1): null} chapterId={chapterId} chapterLink={currentStandard.url} {...criteria}/>
    {/each}
  {/if}


  <Pager label="Previous/Next Chapter">
    {#if chapterId === "success_criteria_level_a"}
      <PagerLink to={'/about'} direction="previous">About</PagerLink>
    {/if}
    {#if currentChapterKey > 0}
      <PagerLink to={`/chapter/${chapters[currentChapterKey - 1].id}`} direction="previous">
        {chapters[currentChapterKey - 1].short_label}
      </PagerLink>
    {/if}
    {#if currentChapterKey + 1 < chapters.length}
      <PagerLink to={`/chapter/${chapters[currentChapterKey + 1].id}`} direction="next">
        {chapters[currentChapterKey + 1].short_label}
      </PagerLink>
    {/if}
    {#if currentChapterKey + 1 === chapters.length}
      <PagerLink to={'/report'} direction="next">View report</PagerLink>
    {/if}
  </Pager>
</div>

