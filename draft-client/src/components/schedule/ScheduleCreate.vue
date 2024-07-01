<template>
    <div>
      <form @submit.prevent="onSubmit">
        <InputText v-model="schedule.teamID" placeholder="Team ID" />
        <InputText v-model="schedule.opponentId" placeholder="Opponent ID" />
        <InputText v-model="schedule.scheduleWeek" placeholder="Schedule Week" />
        <Calendar v-model="schedule.gameDate" placeholder="Game Date" />
        <InputText v-model="schedule.gameCity" placeholder="Game City" />
        <InputText v-model="schedule.gameStateProvince" placeholder="State/Province" />
        <InputText v-model="schedule.gameCountry" placeholder="Country" />
        <InputText v-model="schedule.gameLocation" placeholder="Location" />
        <InputText v-model="schedule.opponentConference" placeholder="Opponent Conference" />
        <InputText v-model="schedule.opponentDivision" placeholder="Opponent Division" />
        <InputText v-model="schedule.winLostFlag" placeholder="Win/Loss" />
        <InputText v-model="schedule.homeOrAway" placeholder="Home/Away" />
        <Button type="submit" label="Save" />
      </form>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, watch, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useScheduleStore } from './store/scheduleStore';

  import { Schedule } from '@/api/schedule';
  
  const store = useScheduleStore();
  const route = useRoute();
  const router = useRouter();
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
  