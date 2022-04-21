<template>
  <nav class="sticky top-0 inset-x-0 z-50 overflow-y-scroll lg:relative lg:h-24 min-h-full flex items-center w-screen select-none" ref="navbar">
    <div class="top-0 inset-x-0 z-50 container mx-auto flex flex-wrap justify-between items-center py-3.5 lg:my-3 px-3 lg:rounded-lg" :class="fixedNavbar">
      <NuxtLink to="/" class="flex items-center">
        <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-9"/>
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">GRUPO 8</span>
      </NuxtLink>
      <div class="flex items-center md:order-2">
        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <NuxtLink
              to="/"
              class="block my-2 mx-4 text-gray-700 border-transparent border-b-2 pb-0.5 lg:hover:border-black "
              exact-active-class="border-primary"
            >Home</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/team"
              class="block my-2 mx-4 text-gray-700 border-transparent border-b-2 pb-0.5 lg:hover:border-black "
              exact-active-class="border-primary"
            >Team</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/calendar"
              class="block my-2 mx-4 text-gray-700 border-transparent border-b-2 pb-0.5 lg:hover:border-black "
              exact-active-class="border-primary"
            >Calendar</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/deliverables"
              class="block my-2 mx-4 text-gray-700 border-transparent border-b-2 pb-0.5 lg:hover:border-black "
              exact-active-class="border-primary"
            >Deliverables</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      observer: null,
      fixedNavbar: {
        'fixed shadow bg-white': false
      }
    }
  },

  beforeMount() {
    this.observer = new IntersectionObserver(
      ([e]) =>  {
        this.fixedNavbar["fixed shadow bg-white"] = !e.isIntersecting
        console.log(this.fixedNavbar)
      },
      {
        rootMargin: "250px",
        threshold: 1.0
      }
    );
  },

  mounted() {
    window.addEventListener('resize', this.onResize, { passive: true })
    this.observer.observe(this.$refs.navbar);
  },

  beforeDestroy() {
    this.observer.disconnect();
  },

  methods: {
    onResize () {
      if (window.innerWidth >= 1024)
        this.observer.observe(this.$refs.navbar);
      else
        this.observer.disconnect()
    },
  },
}
</script>

<style scoped>

</style>
