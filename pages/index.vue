<template>
  <div class="banner overflow-x-hidden">
    <div class="container mx-auto">
      <Navbar v-if="components" :links="components"/>
      <div class="flex flex-col gap-64 pb-20" id="main">
        <component v-for="component in components" :key="component" :is="component" :id="component"/>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "@/components/Home";
import Goals from "@/components/Goals";
import Calendar from "@/components/Calendar";
import Deliverables from "@/components/Deliverables";
import Team from "@/components/Team";

export default {
  components: {Home, Goals, Calendar, Deliverables, Team},
  data() {
    return {
      components: [
        "home",
        "goals",
        "calendar",
        "deliverables",
        "team"
      ]
    }
  }
}
</script>

<style scoped>

.banner {
  background: #f6fcfa url("~assets/images/wave.svg") no-repeat top;
}

@media (max-width: 767px) {
  .banner {
    background-size: 250vh 130vh;
  }
}

@media (min-width: 768px) {
  .banner {
    background-size: 300vw 150vh;
  }

}

@media (min-width: 1024px) {
  .banner {
    background-size: 100vw 150vh;
  }
}
</style>
