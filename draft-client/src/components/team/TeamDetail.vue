<template>
    <div v-if="team">
      <h1>Edit Team: {{ team.name }}</h1>
      <div class="p-fluid">
        <div class="p-field">
          <label for="name">Name</label>
          <InputText id="name" v-model="team.name" placeholder="Name" />
        </div>
        <div class="p-field">
          <label for="city">City</label>
          <InputText id="city" v-model="team.city" placeholder="City" />
        </div>
        <div class="p-field">
          <label for="state">State</label>
          <InputText id="state" v-model="team.state" placeholder="State" />
        </div>
        <div class="p-field">
          <label for="conference">Conference</label>
          <InputText id="conference" v-model="team.conference" placeholder="Conference" />
        </div>
        <Button label="Save" icon="pi pi-check" @click="saveTeam" />
      </div>
      <router-link to="/">Back to List</router-link>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useTeamStore, Team } from './store/teamStore';
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
  
  const route = useRoute();
  const router = useRouter();
  const teamStore = useTeamStore();
  const teamId = Number(route.params.id);
  
  const team = computed(() => {
    return teamStore.teams.find((team: Team) => team.id === teamId);
  });
  
  const saveTeam = () => {
    if (team.value) {
      teamStore.updateTeam(team.value);
      router.push('/');
    }
  };
  </script>
  
  <style>
  @import "primevue/resources/themes/saga-blue/theme.css";
  @import "primevue/resources/primevue.min.css";
  @import "primeicons/primeicons.css";
  </style>
  