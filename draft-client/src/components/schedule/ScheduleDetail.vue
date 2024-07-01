<template>
    <div v-if="schedule">
      <h1>Schedule Detail</h1>
      <p>ID: {{ schedule.id }}</p>
      <p>Team ID: {{ schedule.teamID }}</p>
      <p>Opponent ID: {{ schedule.opponentId }}</p>
      <p>Week: {{ schedule.scheduleWeek }}</p>
      <p>Date: {{ schedule.gameDate }}</p>
      <p>City: {{ schedule.gameCity }}</p>
      <p>State/Province: {{ schedule.gameStateProvince }}</p>
      <p>Country: {{ schedule.gameCountry }}</p>
      <p>Location: {{ schedule.gameLocation }}</p>
      <p>Conference: {{ schedule.opponentConference }}</p>
      <p>Division: {{ schedule.opponentDivision }}</p>
      <p>Win/Loss: {{ schedule.winLostFlag }}</p>
      <p>Home/Away: {{ schedule.homeOrAway }}</p>
      <Button label="Edit" @click="editSchedule" />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useScheduleStore } from './store/scheduleStore';
  
  const store = useScheduleStore();
  const route = useRoute();
  const router = useRouter();
  const schedule = ref(store.schedule);
  
  onMounted(() => {
    store.fetchSchedule(Number(route.params.id));
  });
  
  const editSchedule = () => {
    router.push(`/schedule/${schedule.value?.id}`);
  };
  </script>
  