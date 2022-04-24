<template>
  <div class="container mx-auto flex flex-col lg:flex-row flex-nowrap justify-end text-primary-900 gap-12">
    <div class="flex flex-wrap flex-col justify-center items-center z-10">
      <h1 class="text-4xl md:text-5xl font-bold">Goals</h1>

      <!-- GOALS CARDS -->
      <div class="flex flex-col md:flex-row items-stretch flex-nowrap md:gap-6 max-w-2xl mt-8 gap-5 mx-3 md:mx-0">
        <div class="md:bg-white rounded-lg" v-for="(goal, index) in goals">
          <div class="text-primary-900 rounded max-w-xs h-full md:bg-primary-700/10 flex flex-row md:flex-col items-center justify-start md:px-3 md:py-5">
            <div class="flex-none flex items-center justify-center rounded-full bg-primary h-8 w-8 md:h-12 md:w-12">
              <h2 class="text-xl md:text-3xl font-bold">{{index + 1}}</h2>
            </div>
            <p class="ml-3 md:ml-0 md:mt-5 text-md md:text-xl md:text-center">{{ goal }}</p>
          </div>
        </div>
      </div>
    </div>
    <img class="-mt-12 md:-mt-40 lg:mt-0 max-w-screen-md lg:max-w-2xl w-full -mr-4 z-0" src="~/assets/images/goals.svg"/>
  </div>
</template>

<script>
export default {
  name: "Goals",
  data() {
    return {
      goals: [
        "Help identify camellia specimens' cultivars with crowdsourcing",
        "Test and refine a user reputation algorithm through quizzes",
        "Mobile application to facilitate submission of specimens"
      ]
    }
  }
}
</script>

<style scoped>

</style>
