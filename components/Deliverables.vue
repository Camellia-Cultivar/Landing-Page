<template>
  <div class="flex flex-col md:flex-row lg:justify-end items-center md:flex-nowrap">
    <div class="w-full md:w-1/2 flex flex-col justify-center z-20 gap-6 md:gap-12">
      <p class="text-4xl md:text-5xl font-bold text-center text-primary-900">
        Deliverables
      </p>
      <div class=" inline-grid grid-cols-1 justify-items-center md:justify-items-stretch md:grid-cols-2 lg:grid-cols-3 md:flex-nowrap justify-center md:px-0 gap-3 md:gap-5 lg:gap-9">
        <div
          class="md:card flex flex-row md:flex-col items-center bg-primary-10 shadow-md px-3 py-4 gap-3 max-w-7xl flex-1"
          v-for="phase in phases"
          :key="phase.title"
        >
          <img
            class="max-h-20 md:max-h-32 mt-1 mb-2"
            :src="phase.image"
            :alt="phase.title"
          />
          <div class="flex flex-col gap-3">
            <p class="text-xl md:text-2xl text-center font-bold text-primary-900">
              {{ phase.title }}
            </p>
            <div class="flex flex-col lg:flex-row justify-center items-stretch gap-2">
              <button
                @click="redirect(deliverable.link)"
                class="text-sm md:text-md flex px-3 py-1.5 font-semibold cursor-pointer rounded-md bg-primary-500 ring-2 ring-transparent even:text-primary-10 even:bg-primary-900 odd:hover:ring-primary/20 even:hover:ring-primary-900/20 justify-center"
                v-for="deliverable in phase.deliverables"
                :key="deliverable.id"
              >
                {{ deliverable.title }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-10 text-4xl md:text-5xl font-bold text-center text-primary-900">
        Repository
      </p>
      <a class="mx-auto flex flex-row flex-wrap md:flex-nowrap justify-center md:px-0 gap-3 md:gap-5 lg:gap-9 w-32" href="https://github.com/Camellia-Cultivar/Camellia-Cultivar" target="_blank">
        <img src="~/assets/icons/github-black.png" alt="Github">
      </a>
    </div>

    <img
      class="mt-8 md:mt-0 w-full md:max-w-2xl lg:max-w-3xl md:-mr-32 z-0 self-start"
      src="~/assets/images/deliverables.svg"
      alt=""
    />
  </div>
</template>

<script>
function onClickRedirect(link) {
  window.open(link);
}

export default {
  name: "Deliverables",
  data() {
    return {
      phases: {
        Inception: {
          title: "Inception",
          image: require("@/assets/icons/inception.png"),
          deliverables: [
            {
              id: 1,
              title: "Presentation",
              link: "https://bit.ly/3Op5ce3"
            },
            {
              id: 2,
              title: "Guidelines",
              link: "https://bit.ly/3vyvNwD"
            },
          ],
        },
        Elaboration: {
          title: "Elaboration",
          image: require("@/assets/icons/elaboration.png"),
          deliverables: [
            {
              id: 3,
              title: "Presentation",
              link: "https://bit.ly/3uZcNsr"
            },
            {
              id: 4,
              title: "Guidelines",
              link: "https://bit.ly/3Ev8doM"
            },
          ],
        },
        Contruction: {
          title: "Contruction",
          image: require("@/assets/icons/construction.png"),
          deliverables: [
            {
              id: 5,
              title: "Presentation",
              link: "https://bit.ly/3NiqloV"
            },
          ],
        },
        StudentsAtDeti: {
          title: "students @deti",
          image: require("@/assets/icons/studentsatdeti1.png"),
          deliverables: [
            {
              id: 6,
              title: "Video",
              link: "https://youtu.be/CDTAhkFSiAQ"
            },
            {
              id: 7,
              title: "Poster",
              link: "https://bit.ly/3yfXbCl"
            },
          ],
        },
        Transition: {
          title: "Transition",
          image: require("@/assets/icons/transition.png"),
          deliverables: [
            {
              id: 8,
              title: "Presentation",
              link: "https://bit.ly/3ukKfsH"
            },
          ],
        },
        OurWebsite: {
          title: "Our Website",
          image: require("@/assets/icons/camellia_logo.png"),
          deliverables: [
            {
              id: 9,
              title: "Check it out!",
              link: "https://camellia-cultivar.netlify.app/"
            },
          ],
        },
      },
      redirect: onClickRedirect,
    };
  },
};
</script>
