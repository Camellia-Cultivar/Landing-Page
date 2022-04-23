<template>
  <div class="overflow-x-hidden w-screen">
    <Navbar v-if="components" :links="components"/>
    <div class="container mx-auto flex flex-col gap-80 pb-20" id="main">
      <component v-for="component in components" :key="component" :is="component" :id="component"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      components: [
        "calendar",
        "deliverables",
        "team"
      ]
    }
  }
}
</script>
