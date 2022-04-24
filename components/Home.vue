<template>
  <div class="min-h-screen flex flex-col md:flex-row justify-center md:justify-end gap-20 lg:gap-32 items-center pb-48 md:pb-96 mb-50 lg:mb-0 -space-y-16 md:space-y-0">
    <h1 class="text-white text-left mx-5 md:ml-10 md:mr-0 lg:mx-0 md:text-right font-bold text-4xl md:text-5xl lg:text-6xl z-10 text-shadow">Online camellia cultivar information system</h1>
    <div class="bg-camellia relative bg-white rotate-45 aspect-square h-full w-full max-w-2xl lg:max-w-xl overflow-hidden rounded-[80px] lg:rounded-[150px] -mr-32 md:-mr-16 lg:mr-0"></div>

  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.bg-camellia {
  background: url("~assets/images/camellia.png") no-repeat;
  background-size: cover;
}

.text-shadow {
  text-shadow: #06362C 0 0 0.2em;
}
</style>
