<template>
    <div>
      <h1>Teams</h1>
      <DataTable :value="teamStore.teams">
        <Column field="name" header="Name"></Column>
        <Column field="city" header="City"></Column>
        <Column field="state" header="State"></Column>
        <Column field="conference" header="Conference"></Column>
        <Column header="Actions">
          <template #body="slotProps">
            <router-link :to="'/team/' + slotProps.data.id">
              <Button label="View" icon="pi pi-search" />
            </router-link>
          </template>
        </Column>
      </DataTable>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import { useTeamStore } from '../stores/teamStore';
  import apiClient from '../utils/axios';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import Button from 'primevue/button';
  
  const teamStore = useTeamStore();
  
  onMounted(async () => {
    teamStore.fetchTeams();
  });

  </script>
  
  <style>
  @import "primevue/resources/themes/saga-blue/theme.css";
  @import "primevue/resources/primevue.min.css";
  @import "primeicons/primeicons.css";
  </style>
  