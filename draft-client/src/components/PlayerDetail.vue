<template>
    <div v-if="player">
      <h1>{{ player.firstName }} {{ player.lastName }}</h1>
      <div class="p-fluid p-formgrid p-grid">
        <div class="p-field p-col-12 p-md-6">
          <label for="firstName">First Name</label>
          <InputText v-model="player.firstName" id="firstName" />
        </div>
        <div class="p-field p-col-12 p-md-6">
          <label for="lastName">Last Name</label>
          <InputText v-model="player.lastName" id="lastName" />
        </div>
        <div class="p-field p-col-12 p-md-6">
          <label for="age">Age</label>
          <InputNumber v-model="player.age" id="age" />
        </div>
        <!-- Add other fields similarly -->
      </div>
      <Button label="Save" icon="pi pi-check" @click="savePlayer" />
      <router-link to="/">Back to List</router-link>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { usePlayerStore } from '../stores/playerStore';
  import InputText from 'primevue/inputtext';
  import InputNumber from 'primevue/inputnumber';
  import Button from 'primevue/button';
  
  const route = useRoute();
  const router = useRouter();
  const playerStore = usePlayerStore();
  const playerId = Number(route.params.id);
  
  const player = computed(() => {
    return playerStore.players.find(player => player.id === playerId);
  });
  
  const savePlayer = () => {
    if (player.value) {
      playerStore.updatePlayer(player.value);
      router.push('/');
    }
  };
  </script>
  
  <style>
  .p-field {
    margin-bottom: 1rem;
  }
  </style>
  