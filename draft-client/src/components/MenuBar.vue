<template>
  <Menubar :model="items"></Menubar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {useRouter} from 'vue-router';
import Menubar from "primevue/menubar";

const router = useRouter();
const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    command: () => router.push( {name: 'home'})
  },
  {
    label: "Features",
    icon: "pi pi-star",
  },
  {
    label: "NFL Draft",
    icon: "pi pi-search",
    items: [
      {
        label: "Players",
        icon: 'pi pi-fw pi-users',
        command: () => router.push({name: 'players'})
      },
      {
        label: "Teams",
        icon: "pi pi-bolt",
        command: () => router.push({name: 'teams'})
      },
      {
        label: "Picks",
        icon: 'pi pi-fw pi-list',
        command: () => router.push({name: 'picks'})
      },
      {
        label: "Templates",
        icon: "pi pi-palette",
        items: [
          {
            label: "Apollo",
            icon: "pi pi-palette",
          },
          {
            label: "Ultima",
            icon: "pi pi-palette",
          },
        ],
      },
    ],
  },
  {
    label: "About",
    icon: "pi pi-envelope",
    command: () => router.push({ name: 'about' })
  },
]);
</script>

<style>
@import "primevue/resources/themes/saga-blue/theme.css";
@import "primevue/resources/primevue.min.css";
@import "primeicons/primeicons.css";
</style>
