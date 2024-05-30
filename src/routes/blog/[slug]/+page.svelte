<script>
  import { formatDate } from "$lib/utils";

  export let data;
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="container mx-auto px-4 py-8">
  <hgroup class="text-center mb-8">
    <div class="capitalize text-3xl font-bold">{data.meta.title}</div>
    <p class="mt-2 text-gray-400">
      Published at {formatDate(data.meta.date)}
    </p>
  </hgroup>

  <div class="flex justify-center gap-4 mt-4 mx-auto p-4 rounded-lg">
    {#each data.meta.categories as category}
      <span class="py-2 px-3 rounded-full bg-green-100 text-gray-700"
        >&num;{category}</span
      >
    {/each}
  </div>

  <div class="prose bg-cream border-t border-mint mt-8 px-8 py-6 rounded-lg">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  .container {
    max-width: 800px;
  }
  .prose {
    margin-top: 2rem;
  }
  .bg-cream {
    background-color: #fefdf7; /* Adjust the cream background color as needed */
  }
  .border-mint {
    border-color: #83dac3; /* Use the darker mint color for better contrast */
  }
</style>
