<template>
  <div class="container mx-auto flex flex-wrap md:flex-nowrap max-w-screen md:-space-x-4 lg:-space-x-16 overflow-hidden md:overflow-visible select-none text-primary-900">
    <img class="md:mr-0 md:-ml-10 lg:-ml-10 max-w-lg lg:max-w-4xl w-full" src="~/assets/images/calendar.svg" alt="">

    <div class="grow flex flex-col justify-between mt-4 md:my-auto max-w-xl max-h-screen px-6 md:px-10 py-5 rounded">
      <h1 class="text-4xl md:text-5xl font-bold">Calendar</h1>

      <p class="mt-5 text-md md:text-lg">We have organized our tasks in Notion with multiple views. Check our calendar in the link below!</p>

      <!--See Calendar button-->
      <a class="mt-7" target="_blank" href="https://omniscient-snowdrop-84b.notion.site/a3d8eaf67dde48a5b8ce146f4a543ed0?v=1ab3c422f63148e087cfcdcc2c3deed1">
        <button class="flex bg-primary font-semibold px-4 py-2 rounded items-center gap-x-1 ring-4 ring-transparent hover:ring-primary-100">
          <span>See Calendar</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar"
}
</script>
<style scoped>
</style>
