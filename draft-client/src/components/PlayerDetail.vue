<template>
    <div v-if="player" style="width: 500px; float: center;">
      <h1>{{ player.firstName }} {{ player.lastName }}</h1>

      <div style="width: 535px;">
        <table>
          <tr>
            <td><label for="firstName" style="float:left">First Name</label></td>
            <td><InputText v-model="player.firstName" id="firstName" /></td>
          </tr>
          <tr>
            <td>
              <label for="lastName" style="float:left">Last Name</label></td>
            <td><InputText v-model="player.lastName" id="lastName" /></td>
          </tr>
          <tr>
            <td><label for="university" style="float:left">University</label></td>
            <td> <InputText v-model="player.university" id="university" /></td>
          </tr>

          <tr>
            <td><label for="position" style="float:left">Position</label></td>
            <td><InputText v-model="player.position" id="position" /></td>
          </tr>
          <tr>
            <td><label for="age" style="float:left">Age</label></td>
            <td><InputNumber v-model="player.age" id="age" /></td>
          </tr>
          <tr>
            <td colspan="2" style="float:right"><Button label="Save" icon="pi pi-check" @click="savePlayer" /> &nbsp;&nbsp;
            <router-link to="/players">Back to List</router-link></td>
          </tr>
        </table>
          <!-- Add other fields similarly -->
        </div>
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
  