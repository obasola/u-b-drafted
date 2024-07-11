<template>
    <div>
      <form @submit.prevent="onSubmit">
        <table>
          <tr>
            <td>
              <thead>
                <label for="teamId">Id</label>
              </thead>
            </td>
            <td>
              <InputText id="teamId" v-model="schedule.teamID"/>
            </td>
          </tr>
          <tr>
            <td>
              <thead>
                <label for="opponentId">Opponent</label>
              </thead>
            </td>
            <td>
              <InputText id="opponentId" v-model="schedule.opponentId"/>
            </td>
          </tr>
          <tr>
            <td>
              <thead>
                <label for="week">Week</label>
              </thead>
            </td>
            <td>
              <InputText id="week" v-model="schedule.scheduleWeek"  />
            </td>
          </tr>
          <tr>
            <td>
              <thead>
                <label for="gameDate">Game Date</label>
              </thead>
            </td>
            <td>
              <Calendar id="gameDate" v-model="schedule.gameDate"/>
            </td>
          </tr>
          <tr>
            <td>
              <thead>
                <label for="gameCity">Game Location</label>
              </thead>
            </td>
            <td>
              <p-dropdown 
                v-model="schedule.gameCity" 
                :options="cities" 
                optionLabel="city" 
                placeholder="Select a City"
                @change="onCityChange"
              ></p-dropdown>
            </td>
          </tr>
          <tr>
            <td>
              <thead>
                <label for="stateOrProv">State/Province</label>
              </thead>
            </td>
            <td>
              <p-dropdown 
                v-model="schedule.gameStateProvince" 
                :options="states" 
                optionLabel="state" 
                placeholder="Select a State"
              ></p-dropdown>
            </td>
          </tr>
          <tr>
            <td>
              <thead>
                <label for="gameCountry">Country</label>
              </thead>
            </td>
            <td>
              <InputText id="gameCountry" v-model="schedule.gameCountry" placeholder="Country" />
            </td>
          </tr>
          <tr>
            <td>
              <thead>
                <label for="location">Location</label>
              </thead>
            </td>
            <td>
              <InputText id="location" v-model="schedule.gameLocation"/>
            </td>
          </tr>
          <tr>
            <td>
              <thead>
                <label for="oppConference">Opponent Conference</label>
              </thead>
            </td>
            <td>
              <InputText id="oppConference" v-model="schedule.opponentConference"/>
            </td>
          </tr>
          <tr>
            <td>
              <thead>
                <label for="oppDivision">Opponent Division</label>
              </thead>
            </td>
            <td>
              <InputText id="oppDivision" v-model="schedule.opponentDivision"/>
            </td>
          </tr>
          <tr>
            <td>
              <thead>
                <label for="winLoss">Win / Loss</label>
              </thead>
            </td>
            <td>
              <InputText id="winLoss" v-model="schedule.winLostFlag" placeholder="Win/Loss" />
            </td>
          </tr>
          <tr>
            <td>
              <thead>
                <label for="homeAway">Home / Away</label>
              </thead>
            </td>
            <td>
              <InputText id="homeAway" v-model="schedule.homeOrAway" placeholder="Home/Away" />
            </td>
          </tr>
          <tr>            
            <td colspan="2">              
              <Button type="submit" label="Save" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, reactive, watch, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useScheduleStore } from './store/scheduleStore';
  import { CityService } from '../misc/CityService';
  import { Schedule } from '@/api/schedule';
import NFLTeam from '../misc/NFLTeam';
  
  const store = useScheduleStore();
  const route = useRoute();
  const router = useRouter();
  const service = new CityService();

  const nflTeams = service.getCities();

  const cities = nflTeams.map(NFLTeam => ({
      label: NFLTeam.city,
      value: NFLTeam.city
    }));
  const states = nflTeams.map(NFLTeam => ({
      label: NFLTeam.state,
      value: NFLTeam.state
    }));
  const schedule = ref<Schedule>({
    id: 0,
    teamID: 0,
    opponentId: 0,
    scheduleWeek: 0,
    gameDate: new Date(),
    gameCity: '',
    gameStateProvince: '',
    gameCountry: '',
    gameLocation: '',
    opponentConference: '',
    opponentDivision: '',
    winLostFlag: '',
    homeOrAway: '',
  });
  
  const isEditing = ref(false);
  

  // Define reactive variables
    const selectedCity = ref<NFLTeam | null>(null);
    const selectedState = ref<string | null>(null);

    // Handle city dropdown change
    const onCityChange = (e: any) => {
      const selectedTeam: NFLTeam = e.value;
      selectedState.value = selectedTeam.state;
      store.schedule.gameStateProvince = selectedTeam.state;
    };

  const fetchSchedule = async (id: number) => {
    alert("Error - not implemented");
    /*
    await store.fetchSchedule(id);
    schedule.value = { ...store.schedule };
    */
  };
  onMounted(() => {
    if (route.params.id) {
      isEditing.value = true;
      fetchSchedule(Number(route.params.id));
    }
  });
  
  const onSubmit = async () => {
    if (isEditing.value) {
      await store.updateSchedule(schedule.value);
    } else {
      await store.createSchedule(schedule.value);
    }
    router.push('/schedules');
  };
  </script>
  