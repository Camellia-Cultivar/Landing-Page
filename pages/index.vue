<template>
  <div class="mx-auto overflow-x-hidden">
    <Navbar v-if="components" :links="components"/>
    <div class="flex flex-col gap-8 pb-20" id="main">
      <component v-for="component in components" :key="component" :is="component" :id="component"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      components: [
        "goals",
        "calendar",
        "deliverables",
        "team"
      ]
    }
  }
}
</script>
