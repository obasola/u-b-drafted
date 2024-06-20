<template>
  <div>
    <Menubar :model="items" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Menubar from "primevue/menubar";

const route = useRoute();
const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    route: "/",
  },
  {
    label: "Features",
    icon: "pi pi-star",
  },
  {
    label: "NFL",
    icon: "pi pi-search",
    items: [
      {
        label: "Combine Result",
        icon: "pi pi-bolt",
        route: "/combine",
      },
      {
        label: "Teams",
        icon: "pi pi-server",
        route: "/teamList",
      },
      {
        label: "Picks",
        icon: "pi pi-pencil",
        route: "/",
      },
      {
        label: "Players",
        icon: "pi pi-user",
        route: "/players",
      },
      {
        label: "Schedules",
        icon: "pi pi-palette",
        items: [
          {
            label: "Arizona Cardinals",
            icon: "pi pi-palette",
            route: "/sheduleCardinals",
          },
          {
            label: "Atlanta Falcons",
            icon: "pi pi-palette",
            route: "/scheduleFalcons",
          },
        ],
      },
    ],
  },
  {
    label: "About",
    icon: "pi pi-envelope",
    route: "/about",
  },
]);
</script>
