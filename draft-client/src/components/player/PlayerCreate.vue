<template>
  <div v-if="isCreateRequest" style="width: 500px; float: center">
    <h1>{{ playerDomain.firstName }} {{ playerDomain.lastName }}</h1>

    <div style="width: 75%">
      <table>
        <tr>
          <td><label for="firstName" style="float: left">First Name</label></td>
          <td><InputText v-model="playerDomain.firstName" id="firstName" /></td>
        </tr>
        <tr>
          <td>
            <label for="lastName" style="float: left">Last Name</label>
          </td>
          <td><InputText v-model="playerDomain.lastName" id="lastName" /></td>
        </tr>
        <tr>
          <td>
            <label for="university" style="float: left">University</label>
          </td>
          <td><InputText v-model="playerDomain.university" id="university" /></td>
        </tr>

        <tr>
          <td><label for="position" style="float: left">Position</label></td>
          <td><InputText v-model="playerDomain.position" id="position" /></td>
        </tr>
        <tr>
          <td><label for="yearEntered" style="float: left">Entered NFL</label></td>
          <td><InputNumber v-model="playerDomain.year_entered_league" id="yearEntered" /></td>
        </tr>
        <tr>
          <td><label for="age" style="float: left">Age</label></td>
          <td><InputNumber v-model="playerDomain.age" id="age" /></td>
        </tr>
        <tr>
          <td><label for="height" style="float: left">Height</label></td>
          <td><InputNumber mode="decimal" v-model="playerDomain.height" id="height" /></td>
        </tr>
        <tr>
          <td><label for="weight" style="float: left">Weight</label></td>
          <td><InputNumber mode="decimal" v-model="playerDomain.weight" id="weight" /></td>
        </tr>
        <tr>
          <td><label for="armlength" style="float: left">Arm Length</label></td>
          <td><InputNumber mode="decimal" v-model="playerDomain.armLength" id="armLength" /></td>
        </tr>
        <tr>
          <td><label for="handSize" style="float: left">Hand Size</label></td>
          <td><InputNumber mode="decimal" v-model="playerDomain.handSize" id="handSize" /></td>
        </tr>
       
      </table>
     
      <div style="float:right"> 
          <router-link to="/players">Back to List</router-link>&nbsp;&nbsp; 
          <Button label="Save" icon="pi pi-check" @click="savePlayer" />  
      </div>
      <!-- Add other fields similarly -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePlayerStore } from "./store/playerStore";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
 
const route = useRoute();
const router = useRouter();
const playerStore = usePlayerStore();
const playerId = Number(route.params.id);
const isCreateRequest = ref<boolean>(true);

interface Team {
  id: number;
  name: string;
  city: string;
  state: string;
  conference: string;
}

interface Player {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  height: number;
  weight: number;
  handSize: number;
  armLength: number;
  homeCity: string;
  homeState: string;
  university: string;
  year_entered_league: string;
  pickId: number;
  position: string;
  Team: Team;
}
const playerDomain = reactive({
  id: 0,
  firstName: "",
  lastName: "",
  age: 0,
  height: 0,
  weight: 0,
  handSize: 0,
  armLength: 0,
  homeCity: "",
  homeState: "",
  university: "",
  year_entered_league: "",
  pickId: 0,
  position: "",
  Team: {id:0,name:'',city:'', state: '',conference:''}
});

const savePlayer = () => {
  if (playerDomain.firstName) {
    playerStore.createPlayer(playerDomain);
    router.push("/");
  }
};
</script>

<style>
.p-field {
  margin-bottom: 1rem;
}
</style>
