<script>
  export let data;
</script>

<section id="introPage" class="container mx-auto px-4 py-8">
  <div
    class="flex flex-col gap-2 text-center relative after:absolute after:bottom-0 after:w-full after:h-1.5 after:bg-mint py-16"
  >
    <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl py-6">
      My
      <span class="poppins text-mint">Blog</span>
      (In Progress)
    </h2>

    <p class="text-base sm:text-lg md:text-xl">
      Some random things I have done over the years, from <span
        class="text-mint">machine learning</span
      >
      to work I have done in a
      <span class="text-mint">cancer research</span>
      lab. Some of it is very basic, but represents many of the things I have done
      over the years and the growth that I have had.
    </p>
  </div>
</section>

<section class="container mx-auto px-4 py-8 space-y-6">
  <ul class="grid gap-8">
    {#each data.posts as post}
      <li
        class="p-6 bg-cream rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
      >
        <a
          href="blog/{post.slug}"
          class="font-bold text-2xl sm:text-3xl md:text-4xl text- hover:text-mint-dark transition-colors"
        >
          {post.title}</a
        >
        <p class="text-gray-500 text-sm mt-2">{post.date}</p>
        <p class="mt-4 text-gray-700">{post.description}</p>
      </li>
    {/each}
  </ul>
</section>
