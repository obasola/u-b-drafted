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
          <td><label for="yearEntered" style="float: left">Entered NFL</label></td>
          <td><InputNumber v-model="player.year_entered_league" id="yearEntered" /></td>
        </tr>
        <tr>
          <td><label for="age" style="float: left">Age</label></td>
          <td><InputNumber v-model="player.age" id="age" /></td>
        </tr>
        <tr>
          <td><label for="height" style="float: left">Height</label></td>
          <td><InputNumber mode="decimal" v-model="player.height" id="height" /></td>
        </tr>
        <tr>
          <td><label for="weight" style="float: left">Weight</label></td>
          <td><InputNumber mode="decimal" v-model="player.weight" id="weight" /></td>
        </tr>
        <tr>
          <td><label for="armlength" style="float: left">Arm Length</label></td>
          <td><InputNumber mode="decimal" v-model="player.armLength" id="armLength" /></td>
        </tr>
        <tr>
          <td><label for="handSize" style="float: left">Hand Size</label></td>
          <td><InputNumber mode="decimal" v-model="player.handSize" id="handSize" /></td>
        </tr>
          <tr>
            <td colspan="2" style="float:right"><Button label="Save" icon="pi pi-check" @click="savePlayer" /> &nbsp;&nbsp;
            <router-link to="/players">Back to List</router-link></td>
          </tr>
        </table>
          <!-- Add other fields similarly -->
        </div>
        <Toast ref="toast" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { usePlayerStore } from './store/playerStore';
  import InputText from 'primevue/inputtext';
  import InputNumber from 'primevue/inputnumber';
  import Button from 'primevue/button';
  import Toast from 'primevue/toast';

  const route = useRoute();
  const router = useRouter();
  const playerStore = usePlayerStore();
  const playerId = Number(route.params.id);
  const toast = ref();
  
  const player = computed(() => {
    return playerStore.players.find(player => player.id === playerId);
  });
  
  const savePlayer = () => {
    if (player.value) {      
      playerStore.updatePlayer(player.value);
      showToast('success','success','Player modifications persistened to Database successfully');
      router.push('/');
    }
  };

  function showToast(severity: string, summary: string, detail: string) {
      toast.value?.add({ severity, summary, detail, life: 3000 });
    }
  </script>
  
  <style>
  .p-field {
    margin-bottom: 1rem;
  }
  </style>
  