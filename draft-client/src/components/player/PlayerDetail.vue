<template>
  <div v-if="player" style="width: 100%;">
    <h1 style="float: center">{{ player.firstName }} {{ player.lastName }}</h1>
    <div style="width:40%; float:left;">
      <h2>Details</h2>
        <table>
          <tr>
            <td><label for="firstName" style="float: left">First Name</label></td>
            <td><InputText v-model="player.firstName" id="firstName" /></td>
          </tr>
          <tr>
            <td>
              <label for="lastName" style="float: left">Last Name</label>
            </td>
            <td><InputText v-model="player.lastName" id="lastName" /></td>
          </tr>
          <tr>
            <td>
              <label for="university" style="float: left">University</label>
            </td>
            <td><InputText v-model="player.university" id="university" /></td>
          </tr>

          <tr>
            <td><label for="position" style="float: left">Position</label></td>
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
          <td><InputNumber mode="decimal" v-model="playerStore.player.armLength" id="armLength" /></td>
        </tr>
        <tr>
          <td><label for="handSize" style="float: left">Hand Size</label></td>
          <td><InputNumber mode="decimal" v-model="player.handSize" id="handSize" /></td>
        </tr>
          <tr>
            <td colspan="2" style="float: right">
              <Button label="Save" icon="pi pi-check" @click="savePlayer" />
              &nbsp;&nbsp; <router-link to="/players">Back to List</router-link>
            </td>
          </tr>
        </table>
      </div>
      <div style="width:60%; float:right;">
        <h2>Awards</h2> <button onclick="openDialog()">New Award</button>
        <DataTable :value="playerAwardsStore.playerAwards" @row-click="onRowClick">
          <Column field="award_name" header="Award Name" />
          <Column field="year_awarded" header="Year Awarded" />
        </DataTable>
        <Dialog v-model:visible="isDialogVisible" :modal="true" :closable="false">
          <PlayerAwardDetail :playerStore.award="selectedAward" @close="isDialogVisible = false" />
        </Dialog>
      </div>    
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePlayerStore } from "./store/playerStore";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import Dialog from 'primevue/dialog';
import PlayerAwardDetail from "./PlayerAwardDetail.vue";
import { usePlayerAwardsStore } from './store/playerAwardStore';

const playerAwardsStore = usePlayerAwardsStore();

const route = useRoute();
const router = useRouter();
const playerStore = usePlayerStore();
const isDialogVisible = ref(false);

//const playerId = Number(route.params.id);
const playerId = parseInt(route.params.id as string);
const player = computed(() => {
  //playerStore.fetchPlayerAwards(playerId);
  console.log("Requesting api call now");
  playerAwardsStore.fetchPlayerAwardsById(playerId);
  console.log("Requst complete");
  return playerStore.players.find((player) => player.id === playerId);
});
const openDialog = () => {
  alert("openDialog reached");
  router.push("/playweAwards");
}
const onRowClick = (event: any) => {
    playerAwardsStore.selectAward(event.data);
    isDialogVisible.value = true;
  };

  const selectedAward = computed(() => playerAwardsStore.selectedAward);

const savePlayer = () => {
  if (player.value) {
    playerStore.updatePlayer(player.value);
    router.push("/");
  }
};
</script>

<style>
.p-field {
  margin-bottom: 1rem;
}
</style>
