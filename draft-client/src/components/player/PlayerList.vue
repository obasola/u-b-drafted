<template>
    <div>
      <h1>Players</h1>
      <DataTable :value="playerStore.players">
        <Column field="firstName" header="First Name"></Column>
        <Column field="lastName" header="Last Name"></Column>
        <Column field="university" header="University"></Column>
        <Column field="position" header="Position"></Column>
        <Column field="year_entered_league" header="NFL Debut"></Column>
        <Column header="Actions">
          <template #body="slotProps">
            <router-link :to="'/player/' + slotProps.data.id">
              <Button label="View" icon="pi pi-search" />
            </router-link>
          </template>
        </Column>
      </DataTable>
    </div>
  </template>
  
  <script setup lang="ts">
  import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { usePlayerStore } from './store/playerStore';
  
  const playerStore = usePlayerStore();
  const router = useRouter();
  
  onMounted(async () => {
    playerStore.fetchPlayers();
  });
  
  const onRowClick = (event: any) => {
    router.push(`/players/${event.data.id}`);
  };
  </script>
  