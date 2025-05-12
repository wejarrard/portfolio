<script>
  import { steps } from "$lib/steps.js";
  import Step from "./Step.svelte";

  import { onMount } from "svelte";

  onMount(() => {
    const particlesJS = window.particlesJS;

    particlesJS.load("particles-js", "/assets/particles.json", function () {
      console.log("callback - particles.js config loaded");
    });
  });
</script>

<div class="absolute min-h-screen top-0 left-0 w-full z-[-1] opacity-70">
  <div id="particles-js" class="absolute inset-0" />
</div>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        <!-- Hi! I'm -->
        <span class="poppins text-mint">William</span>
        Jarrard
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        I am currently a Data Scientist and Machine Learning Researcher
        at UCSF where I
        work under <a href="https://artera.ai/team/felix-feng" class="text-mint">Felix Feng</a> on applying deep learning to study
        transcription factors in prostate cancer. I was previously an
        undergraduate at UVA, where I majored in Systems Engineering. During my time at UVA, I made
        significant contributions to
        <a
          href="https://www.nature.com/articles/s41586-021-03903-7"
          class="text-mint">cancer research</a
        >, particularly in advancing our understanding of genetic factors in
        oncology and helping to develop a method for extracting crucial information, like drug names, from paper medical sheets for a hospital in Rwanda. I also completed a 4+1 program to earn my Master’s in Data
        Science at UVA.
      </p>

      <a
        href="https://www.linkedin.com/in/willjarrard/"
        target="_blank"
        rel="noopener noreferrer"
        class="greenShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-gray text-gray inline-block"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-mint opacity-20 group-hover:translate-x-full z-0 duration-200"
        ></div>
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </a>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <img
        src={"images/profile.png"}
        alt="Zetane Engine"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>
  </section>
  <section class="py-20 lg:py-32 flex flex-col gap-24" id="highlights">
    <div class="flex flex-col gap-2 text-center">
      <!-- <h6 class="text-large sm:text-xl md:text-2xl">
        A few of my creative endeavors.
      </h6> -->
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Work <span class="poppins text-mint">Highlights</span>
        
      </h3>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      {#each steps as step (step.name)}
        <Step {step} />
      {/each}
    </div>
  </section>
  <!-- <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-green-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-green-700 py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-green-600">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-cream font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              {benefit.name}
            </h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </section> -->
</main>
