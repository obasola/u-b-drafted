<!-- components/PlayerAwardsList.vue -->
<template>
    <div>
      <DataTable :value="playerAwards" @row-click="onRowClick">
        <Column field="id" header="ID" />
        <Column header="Player">
          <template #body="slotProps">
            {{ slotProps.data.Player.firstName }} {{ slotProps.data.Player.lastName }}
          </template>
        </Column>
        <Column field="year_awarded" header="Year Awarded" />
      </DataTable>
      <Dialog v-model:visible="isDialogVisible" :modal="true" :closable="false">
        <PlayerAwardDetail :award="selectedAward" @close="isDialogVisible = false" />
      </Dialog>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';
  import { usePlayerAwardsStore } from './store/playerAwardStore';
import Player from '@/domain/interfaces/domainInterfaces';

  const playerAwardsStore = usePlayerAwardsStore();
  const isDialogVisible = ref(false);
  
  onMounted(() => {
    playerAwardsStore.fetchPlayerAwards();
  });
  
  const onRowClick = (event: any) => {
    playerAwardsStore.selectAward(event.data);
    isDialogVisible.value = true;
  };
  
  const playerAwards = computed(() => playerAwardsStore.playerAwards);
  const selectedAward = computed(() => playerAwardsStore.selectedAward);
  </script>
  