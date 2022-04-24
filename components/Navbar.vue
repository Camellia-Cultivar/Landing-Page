<template>
  <nav
    class=
      "h-24
      text-primary-900
      select-none"
  >
    <div
      :class="navbar"
      class=
        "top-0 lg:top-2 inset-x-0 z-50
        flex flex-wrap justify-between items-center
        md:px-10 py-3.5 max-w-screen-xl mx-auto
        lg:rounded-lg"
    >
      <NuxtLink
        to="/"
        class=
          "flex items-center
          ml-5 md:ml-0"
      >
        <div
          class=
            "logo
            self-center flex flex-nowrap gap-1.5
            text-xl font-semibold whitespace-nowrap"
        >
          <span>GROUP</span>
          <span class="highlight pr-3">8</span>
        </div>
      </NuxtLink>
      <div class="flex items-center md:order-2">
        <button
          @click="toggleNavbar"
          type="button"
          class=
            "inline-flex items-center
            p-2 ml-1 mr-3
            text-sm
            rounded-lg hover:bg-gray-100
            md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>

      <div
        class=
          "fixed top-16 md:relative md:top-0 md:order-1
           md:flex justify-between items-center
           w-full md:w-auto
           bg-white md:bg-transparent"
        :class="{ hidden : !this.navbarDropdown}"
      >
        <ul class=
              "flex flex-col md:flex-row md:space-x-8
              md:mt-4 md:mt-0
              md:text-sm md:font-medium"
            v-for="link in links">
          <li
            class="block p-4 md:my-2 md:mx-4 text-md font-normal border-b-2 md:p-0 md:pb-0.5 md:bg-transparent lg:hover:border-black border-transparent"
            :class=" activeLink.id === link ? 'md:border-primary bg-gray-900/5' : ''">
            <a
              :href="'#'+link"
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
      activeLink: {
        id: "",
        ratio: 0
      },
      navbarDropdown: false
    }
  },

  beforeMount() {
    let thresholdArray = []
    let len = 5
    for (let i=0; i <= len; i++)
      thresholdArray.push(i/len)
    console.log(thresholdArray)

    this.observer = new IntersectionObserver( (entries) =>
        entries.forEach((e) =>
        {
          if(!e.isIntersecting)
            return;

          this.activeLink = {
            id: e.target.id,
            ratio: e.intersectionRatio
          }
        },
        {
          root: document.getElementById('main'),
          rootMargin: '0px',
          threshold: thresholdArray
        }
      ));
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll)
    this.links.forEach(id => this.observer.observe(document.getElementById(id)))
  },

  beforeDestroy() {
    this.observer.disconnect();
  },

  methods: {
    onScroll() {
      this.topOfPage = window.scrollY < 200
      this.navbarDropdown = false
    },
    toggleNavbar() {
      this.navbarDropdown = !this.navbarDropdown
    }
  },
  computed: {
    navbar() {
      return {
        "fixed bg-white": !this.topOfPage || this.navbarDropdown,
        shadow: !this.topOfPage,
        "text-white": this.topOfPage,
        "bg-opacity-95": !this.topOfPage && !this.navbarDropdown
      }
    }
  }
}
</script>

<style scoped>

.logo:hover .highlight {
  font-weight: bold;
  color: #00dc82;
  transform: scale(1.2);
  transition-delay: 150ms;
  transition-duration: 100ms;
}


</style>
