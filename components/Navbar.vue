<template>
  <nav class="sticky top-0 inset-x-0 z-50 lg:relative lg:h-24 min-h-full flex items-center select-none max-w-full">
    <div class="top-0 inset-x-0 z-50 container mx-auto flex flex-wrap justify-between items-center py-3.5 lg:my-3 px-10 lg:rounded-lg" :class="fixedNavbar">
      <NuxtLink to="/" class="flex items-center">
        <div class="logo self-center flex flex-nowrap gap-1.5 font-semibold whitespace-nowrap delay-150 ease-in-out duration-700 text-xl">
          <span>GROUP</span>
          <span class="highlight pr-3">8</span>
        </div>
      </NuxtLink>
      <div class="flex items-center md:order-2">
        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" v-for="link in links">
          <li>
            <a
              :href="'#'+link"
              class="block my-2 mx-4 text-black text-lg font-normal border-b-2 pb-0.5 lg:hover:border-black"
              :class=" activeLink.id === link ? 'border-primary' : 'border-transparent' "
            >{{ link.charAt(0).toUpperCase()+link.slice(1).toLowerCase()}}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Navbar",
  props: {
    links: Array
  },

  data() {
    return {
      observer: null,
      topOfPage: true,
      fixedNavbar: {
        "fixed shadow bg-white/95": false
      },
      activeLink: {
        id: "",
        ratio: 0
      }
    }
  },

  beforeMount() {
    let thresholdArray = []
    let len = 20
    for (let i=0; i <= len; i++)
      thresholdArray.push(i/len)
    console.log(thresholdArray)

    this.observer = new IntersectionObserver( (entries) =>
        entries.forEach((e) =>
        {
          if(!e.isIntersecting)
            return;

          if (this.activeLink.id === e.target.id) {
            this.activeLink.ratio = e.intersectionRatio
            return;
          }
          if (this.activeLink.ratio < e.intersectionRatio)
            this.activeLink = {
              id: e.target.id,
              ratio: e.intersectionRatio
            }
          console.log(this.activeLink.id)
        },
        {
          root: document.getElementById('main'),
          rootMargin: '-200px',
          threshold: thresholdArray
        }
      ));
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true})
    this.links.forEach(id => this.observer.observe(document.getElementById(id)))
  },

  beforeDestroy() {
    this.observer.disconnect();
  },

  methods: {
    onScroll() {
      this.fixedNavbar["fixed shadow bg-white/95"] = window.scrollY > 100
    }
  },
}
</script>

<style scoped>

.logo:hover .highlight {
  font-weight: bold;
  color: #00dc82;
  transition-delay: 150ms;
  transition-duration: 100ms;
  transform: scale(1.2);
}


</style>
