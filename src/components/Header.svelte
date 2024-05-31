<script>
  export let y;

  export let tabs = [
    { name: "Home", link: "/" },
    { name: "Highlights", link: "/#highlights" },
    { name: "Blog", link: "/blog" },
    { name: "Resume", link: "/assets/resume.pdf" },
  ];
</script>

<header
  class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
    (y > 0
      ? " py-4 bg-cream border-mint"
      : " py-6 bg-transparent border-transparent")}
>
  <h1 class="font-medium">
    <b class="font-bold poppins">Will</b> <span class="">Jarrard</span>
  </h1>
  <div class="sm:flex items-center gap-4 hidden">
    {#each tabs as tab, index}
      <a
        href={tab.link}
        class="duration-200 hover:text-mint"
        target={tab.name === "Resume" ? "_blank" : ""}
      >
        <p>{tab.name}</p>
      </a>
    {/each}
  </div>
  <a
    href="https://www.linkedin.com/in/willjarrard/"
    target="_blank"
    rel="noopener noreferrer"
    class="greenShadow relative overflow-hidden px-5 py-2 group rounded-full bg-gray text-gray inline-block"
  >
    <div
      class="absolute top-0 right-full w-full h-full bg-mint opacity-20 group-hover:translate-x-full z-0 duration-200"
    ></div>
    <h4 class="relative z-9">Get in touch</h4>
  </a>
</header>
