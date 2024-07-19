<template>
    <div>
      <form @submit.prevent="onSubmit">
        <table>
          <tr>
            <td>
              <thead>
                <label for="gameCity">Game Location</label>
              </thead>
            </td>
            <td>
              <Dropdown 
                v-model="schedule.gameCity" 
                :options="cityOptions" 
                optionLabel="city" 
                placeholder="Select a City"
                @change="onCityChange"
              ></Dropdown>
            </td>
          </tr>
          <tr>
            <td>
              <thead>
                <label for="teamId">Team</label>
              </thead>
            </td>
            <td>
              <InputText readonly id="teamName" v-model="teamStore.homeTeam.name"/>
            </td>
          </tr>
          <tr>
            <td>
              <thead>
                <label for="opponentId">Opponent</label>
              </thead>
            </td>
            <td>
              <Dropdown 
                v-model="schedule.opponentName" 
                :options="opposingTeamOptions" 
                optionLabel="name" 
                placeholder="Select a Team"
                @change="onOpposingTeamChange"
              ></Dropdown>
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
                <label for="stateOrProv">State/Province</label>
              </thead>
            </td>
            <td>
              <InputText readonly id="StateOrProvence" v-model="schedule.gameStateProvince"  />
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
                <label for="winLoss">Win / LosT</label>
              </thead>
            </td>
            <td>
              <Dropdown 
              v-model="schedule.winLostFlag" 
              :options="wlOptions" 
              optionLabel="label" />
            </td>
          </tr>
          <tr>
            <td>
              <thead>
                <label for="homeAway">Home / Away</label>
              </thead>
            </td>
            <td>
              <Dropdown 
                v-model="schedule.homeOrAway" 
                :options="options" 
                optionLabel="label"
                @change="onHomeAwayFlagChange"
              />
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
  import { useTeamStore } from '../team/store/teamStore';
  import { CityService } from '../misc/CityService';
  import { Schedule } from '@/api/schedule';
  import NFLTeam from '../misc/TeamStadium';
  import Team from '@/domain/interfaces/Team';
  
  const store = useScheduleStore();
  const teamStore = useTeamStore();
  const route = useRoute();
  const router = useRouter();
  const service = new CityService();

  const cityOptions = ref<{ city: string, state: string }[]>([]);
  
  const opposingTeamOptions = ref<{name: string, conference: string, division: string}[]>([]);
  const homeTeams = ref(service.getCities() );
  const opposingTeams = ref(service.getCities() );
  const homeTeam = ref<Team>({
    id: 0,
    name: '',
    city: '',
    state: '',
    conference: '',
    division: '',
    stadium: '',
  });
  const opposingTeamSelected = ref<Team>({
    id: 0,
    name: '',
    city: '',
    state: '',
    conference: '',
    division: '',
    stadium: '',
  });
  // Define the type for options
  interface Option {
    label: string;
    value: string;
  }
  cityOptions.value = homeTeams.value.map(team => ({ name: team.name, city: team.city, state: team.state, conference: team.conference, division: team.division, stadium: team.stadium }));
  opposingTeamOptions.value = opposingTeams.value.map(team => ({ name: team.name, city: team.city, state: team.state, conference: team.conference, division: team.division, stadium: team.stadium }));


const options: Option[] = [
    { label: 'Home', value: 'H' },
    { label: 'Away', value: 'A' },
  ];
  const wlOptions: Option[] = [
    { label: '', value: 'Choose' },
    { label: 'Lost', value: 'L' },
    { label: 'Won', value: 'W' },
  ];

  const schedule = ref({
    id: 0,
    teamName: '',
    scheduleWeek: 0,
    gameDate: new Date(),
    gameCity: '',
    gameStateProvince: '',
    gameCountry: 'USA',
    gameLocation: '',
    opponentName: '',
    opponentConference: '',
    opponentDivision: '',
    winLostFlag: '',
    homeOrAway: { label: '', value: '' },
  });
  
  const isEditing = ref(false);
  let homeAwayFlag = '';

  // Define reactive variables
    const selectedCity = ref<NFLTeam | null>(null);
    cityOptions.value = homeTeams.value.map(team => ({ name: team.name, city: team.city, state: team.state, conference: team.conference, division: team.division, stadium: team.stadium }));
    

    const resetOpposingTeam = () => {
      opposingTeams.value = service.getCities();
      cityOptions.value = opposingTeams.value.map(team => ({ name: team.name, city: team.city, state: team.state, 
      conference: team.conference, division: team.division, stadium: team.stadium }));
    }

    // Handle city dropdown change
    const onCityChange = (e: any) => {      
      teamStore.homeTeam = e.value;
      schedule.value.gameStateProvince = teamStore.homeTeam.state;
      store.schedule.gameStateProvince = teamStore.homeTeam.state;
      schedule.value.teamName = teamStore.homeTeam.name;
    };

    // Handle Team dropdown change
    const onOpposingTeamChange = (e: any) => {      
      teamStore.OpposingTeam = e.value;

     // schedule.value.gameLocation = teamStore.OpposingTeam.stadium;      schedule.value.opponentConference = opposingTeamSelected.value.conference;
      schedule.value.opponentDivision = teamStore.OpposingTeam.division;
      schedule.value.opponentConference = teamStore.OpposingTeam.conference;
    };

    const onHomeAwayFlagChange = (e: any) => {
      if(schedule.value.homeOrAway.label === 'Away') {
        schedule.value.gameLocation = teamStore.OpposingTeam.stadium;
        schedule.value.gameStateProvince = teamStore.OpposingTeam.state;
        schedule.value.opponentConference = teamStore.OpposingTeam.conference;
        schedule.value.opponentDivision = teamStore.OpposingTeam.division;
      }else if(schedule.value.homeOrAway.label === 'Home') {
        schedule.value.gameLocation = teamStore.homeTeam.stadium;
        schedule.value.gameStateProvince = teamStore.homeTeam.state;
        schedule.value.opponentConference = teamStore.homeTeam.conference;
        schedule.value.opponentDivision = teamStore.homeTeam.division;
      }else{
        alert("No match found for dropdown selection");
      }
      
    }

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
  