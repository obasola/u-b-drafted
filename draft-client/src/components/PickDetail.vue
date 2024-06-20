<template>
    <div v-if="pick">
      <h1>{{ pick.player }}</h1>
      <InputText v-model="pick.player" placeholder="Player" />
      <InputNumber v-model="pick.selectionRound" placeholder="Round" />
      <InputNumber v-model="pick.selectionNumber" placeholder="Number" />
      <InputText v-model="pick.selectionYear" placeholder="Year" />
      <InputText v-model="pick.selectionPickFrom" placeholder="From" />
      <InputText v-model="pick.selectionPickTo" placeholder="To" />
      <InputNumber v-model="pick.combineScore" placeholder="Score" />
      <router-link to="/">Back to List</router-link>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { usePickStore} from '../stores/pickStore';
  import InputText from 'primevue/inputtext';
  import InputNumber from 'primevue/inputnumber';
  import Pick from '@/domain/interfaces/domainInterfaces';
  const route = useRoute();
  const pickStore = usePickStore();
  const pickId = Number(route.params.id);
  
  const pick = computed(() => {
    return pickStore.picks.find((pick: Pick) => pick.id === pickId);
  });
  </script>
  