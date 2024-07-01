<template>
    <div v-if="combineScore">
      <p>ID: {{ combineScore.id }}</p>
      <p>Player: {{ playerFullName }}</p>
      <p>Forty Time: {{ combineScore.fortyTime }}</p>
      <!-- Add other fields as necessary -->
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';
  import { useCombineScoreStore } from './store/combineScoreStore';
  import { usePlayerStore } from './store/PlayerStore';
  import { useRoute } from 'vue-router';
  
  const combineScoreStore = useCombineScoreStore();
  const playerStore = usePlayerStore();
  const route = useRoute();
  
  const combineScore = ref(combineScoreStore.selectedCombineScore);
  
  onMounted(async () => {
    await combineScoreStore.fetchCombineScore(Number(route.params.id));
    combineScore.value = combineScoreStore.selectedCombineScore;
  });
  
  const playerFullName = computed(() => {
    if (!combineScore.value) return '';
    const player = playerStore.players.find(p => p.id === combineScore.value!.playerId);
    return player ? player.firstName : 'Unknown';
  });
  </script>
  
  <style>
  /* Add any necessary styling here */
  </style>
  