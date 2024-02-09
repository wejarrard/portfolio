<script>
  import { formatDate } from "$lib/utils";

  export let data;
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="mx-auto">
  <hgroup class="text-center">
    <div class="capitalize text-2xl">{data.meta.title}</div>
    <p class="mt-2 text-gray-400">
      Published at {formatDate(data.meta.date)}
    </p>
  </hgroup>

  <div class="flex justify-center gap-4 mt-4 mx-auto p-4 rounded-lg">
    {#each data.meta.categories as category}
      <span class="py-2 px-3 rounded-full bg-gray-700 text-white"
        >&num;{category}</span
      >
    {/each}
  </div>

  <div class="prose bg-slate-950 border-t border-teal-400">
    <svelte:component this={data.content} />
  </div>
</article>
