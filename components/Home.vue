<template>
  <div class="min-h-screen flex flex-col lg:flex-row justify-center lg:justify-end gap-20 lg:gap-32 items-center pb-48 lg:pb-[30rem] mb-50 lg:mb-0 -space-y-16 md:space-y-0">
    <div class="flex flex-col gap-4 mx-5 md:ml-10 md:mr-0 lg:mx-0 text-white text-left lg:text-right text-shadow z-20">
      <h1 class="font-bold text-4xl md:text-5xl lg:text-6xl">Online camellia cultivar information system</h1>
      <p class="text-lg md:text-xl lg:text-2xl">To help identify and catalogue camellia specimens and their cultivars</p>

    </div>
    <div class="bg-camellia relative bg-white rotate-45 aspect-square h-full w-full max-w-2xl md:max-w-xl overflow-hidden rounded-[80px] md:rounded-[150px] -mr-32 md:mr-0 lg:mr-0"></div>

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
