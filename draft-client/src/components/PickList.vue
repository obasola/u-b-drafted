<template>
    <div>
      <h1>Picks</h1>
      <DataTable :value="pickStore.picks">
        <Column field="player" header="Player"></Column>
        <Column field="selectionRound" header="Round"></Column>
        <Column field="selectionNumber" header="Number"></Column>
        <Column field="selectionYear" header="Year"></Column>
        <Column field="selectionPickFrom" header="From"></Column>
        <Column field="selectionPickTo" header="To"></Column>
        <Column field="combineScore" header="Score"></Column>
        <Column header="Actions">
          <template #body="slotProps">
            <router-link :to="'/pick/' + slotProps.data.id">
              <Button label="View" icon="pi pi-search" />
            </router-link>
          </template>
        </Column>
      </DataTable>
    </div>
  </template>
  
  <script setup lang="ts">
  import { usePickStore } from '@/stores/pickStore';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import { onMounted } from 'vue';
  
  const pickStore = usePickStore();
  
  onMounted(async () => {
    pickStore.fetchPicks();
  });
  
  </script>
  