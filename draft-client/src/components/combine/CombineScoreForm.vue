<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="player">Player</label>
        <Dropdown v-model="combineScore.playerId" :options="playerOptions" optionLabel="fullName" optionValue="id" />
      </div>
      <!-- Add other form fields as necessary -->
      <Button type="submit" label="Create" />
    </form>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useCombineScoreStore } from './store/combineScoreStore';
  import { usePlayerStore } from './store/PlayerStore';
  import CombineScore from '@/domain/interfaces/domainInterfaces';
  import Dropdown from 'primevue/dropdown';
  import Button from 'primevue/button';
  
  const combineScoreStore = useCombineScoreStore();
  const playerStore = usePlayerStore();
  
  const combineScore = ref<Partial<CombineScore>>({
    playerId: 0
  });
  
  const playerOptions = ref([{id:0, fullName:''}]);
  
  onMounted(() => {
    playerStore.fetchPlayers();
    playerOptions.value = playerStore.players;
  });
  
  const submitForm = () => {
    if (combineScore.value.playerId) {
      combineScoreStore.createCombineScore(combineScore.value as CombineScore);
    }
  };
  </script>
  
  <style>
  /* Add any necessary styling here */
  </style>
  