import component from '../shims-vue';
<template>
  <h2>Welcome to the Picks Page</h2>
  <ListPicksComponent />
</template>

<script setup lang="ts">
import ListPicksComponent from '../../components/picks/ListPicksComponent.vue';

console.log("Entered component PickPage");
</script>
