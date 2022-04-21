<template>
  <div class="container-centered-90 mt-4">
    <div>
      <p class="text-3xl font-bold text-dark-primary text-center">
        Deliverables
      </p>
    </div>
    <div class="grid grid-cols-2 mt-16 justify-items-center">
      <div
        class="card flex flex-col items-center bg-gray-50 max-w-max shadow-md p-3"
        v-for="phase in phases"
        :key="phase.title"
      >
        <p class="text-lg text-center font-semibold text-dark-primary mb-2">
          {{ phase.title }}
        </p>
        <img class="max-h-44 mt-1 mb-2" :src="phase.image" :alt="phase.title" />
        <div class="flex justify-center mt-2">
          <div
            @click="redirect(deliverable.link)"
            class="flex mx-2 px-1 py-1 cursor-pointer hover:shadow-md"
            v-for="deliverable in phase.deliverables"
            :key="deliverable.id"
          >
            <p
              class="underline underline-offset-0.5 cursor-pointer text-dark-primary"
            >
              {{ deliverable.title }}
            </p>
            <img
              class="mx-2 max-h-5 cursor-pointer hover:move"
              :src="deliverable.icon"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function onClickRedirect(link) {
  window.open(link);
}

export default {
  data() {
    return {
      phases: {
        Inception: {
          title: "Inception",
          image: "inception.png",
          deliverables: [
            {
              id: 1,
              title: "Presentation",
              link: "https://bit.ly/3Op5ce3",
              icon: "presentation.png",
            },
            {
              id: 2,
              title: "Guidelines",
              link: "https://bit.ly/3vyvNwD",
              icon: "doc.png",
            },
          ],
        },
        Elaboration: {
          title: "Elaboration",
          image: "elaboration.png",
          deliverables: [
            {
              id: 3,
              title: "Presentation",
              link: "https://bit.ly/3uZcNsr",
              icon: "presentation.png",
            },
            {
              id: 4,
              title: "Guidelines",
              link: "https://bit.ly/3Ev8doM",
              icon: "doc.png",
            },
          ],
        },
      },
      redirect: onClickRedirect,
    };
  },
};
</script>
