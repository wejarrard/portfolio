<script>
  export let step;
</script>

<a
  href={step.href}
  target="_blank"
  class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-mint text-center cursor-pointer group hover:border-mint duration-200"
>
  <div
    class="bg-cream grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
  >
    <i class={step.icon} />
  </div>
  <div class="font-medium text-xl sm:text-2xl md:text-3xl">
    {step.name}
  </div>

  <!-- Optional paper name section -->
  {#if step.paperName}
    <div class="font-medium text-lg sm:text-xl md:text-2xl text-mint">
      {step.paperName}
    </div>
  {/if}
  <!-- Render the description here -->
  <p class="text-base sm:text-lg">{@html step.description}</p>

  <div class="flex-1 flex justify-between gap-4 items-end">
    <div
      class="ml-auto cursor-pointer hover:text-cream duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-gray after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"
    >
      <p class="z-4">Go to &rarr;</p>
    </div>
  </div>
</a>
