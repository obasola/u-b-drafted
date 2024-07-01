<template>
  <div>
    <h1>Schedules</h1>
    <Button label="Create Schedule" icon="pi pi-plus" @click="createSchedule" />
    <DataTable :value="schedules">
      <Column field="id" header="ID" />
      <Column field="teamID" header="Team ID" />
      <Column field="opponentId" header="Opponent ID" />
      <Column field="scheduleWeek" header="Week" />
      <Column field="gameDate" header="Date" />
      <Column field="gameCity" header="City" />
      <Column field="gameStateProvince" header="State/Province" />
      <Column field="gameCountry" header="Country" />
      <Column field="gameLocation" header="Location" />
      <Column field="opponentConference" header="Conference" />
      <Column field="opponentDivision" header="Division" />
      <Column field="winLostFlag" header="W/L" />
      <Column field="homeOrAway" header="Home/Away" />
      <Column header="Actions">
          <template #body="slotProps">
            <router-link :to="'/schedule/edit/' + slotProps.data.id">
              <Button label="Edit" icon="pi pi-search" />
            </router-link>

            <router-link :to="'/schedule/delete/' + slotProps.data.id">
              <Button label="Edit" icon="pi pi-search" />
            </router-link>
          </template>
        </Column>
    </DataTable>

  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useScheduleStore } from './store/scheduleStore';

const router = useRouter();
const store = useScheduleStore();
const schedules = ref(store.schedules);

onMounted(async () => {
  await store.fetchSchedules();
});

const createSchedule = () => {
  router.push('/create');
};

const editSchedule = (key: any) => {
    const id = Number(key);
  router.push(`/schedule/${id}`);
};

const deleteSchedule = async (key: any) => {
    const id = Number(key);
  await store.deleteSchedule(id);
};


</script>
