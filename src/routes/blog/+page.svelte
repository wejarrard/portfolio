<script>
  export let data;
</script>

<section id="introPage">
  <div
    class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-teal-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-teal-700 py-4"
  >
    <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
      My
      <span class="poppins text-teal-600">Blog</span>
      (In Progress)
    </h2>

    <p class="text-base sm:text-lg md:text-xl">
      Some random things I have done over the years, from <span
        class="text-teal-600">machine learning</span
      >
      to work I have done in a
      <span class="text-teal-600">cancer research</span>
      lab. Some of it is very basic, but represents many of the things I have done
      over the years and the growth that I have had.
    </p>
  </div>
</section>

<section class="space-y-4 pt-16">
  <ul class="grid gap-6">
    {#each data.posts as post}
      <li class="border-b border-teal-400 pb-6 last:border-b-0">
        <a
          href="blog/{post.slug}"
          class="font-semibold text-3xl sm:text-4xl md:text-5xl"
        >
          {post.title}</a
        >
        <p class="text-gray-400">{post.date}</p>
        <p class="mt-3">{post.description}</p>
      </li>
    {/each}
  </ul>
</section>
