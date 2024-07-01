<!-- components/PickCreate.vue -->
<template>
  <div>
    <h1>Create New Pick</h1>
    <form @submit.prevent="createPick">
      <div>
        <label for="teamId">Team ID:</label>
        <InputText id="teamId" v-model="pick.teamId" />
      </div>
      <div>
        <label for="player">Player:</label>
        <InputText id="player" v-model="pick.player" />
      </div>
      <div>
        <label for="selectionRound">Round:</label>
        <InputText id="selectionRound" v-model="pick.selectionRound" />
      </div>
      <div>
        <label for="selectionNumber">Number:</label>
        <InputText id="selectionNumber" v-model="pick.selectionNumber" />
      </div>
      <div>
        <label for="selectionYear">Year:</label>
        <InputText id="selectionYear" v-model="pick.selectionYear" />
      </div>
      <div>
        <label for="selectionPickFrom">From:</label>
        <InputText id="selectionPickFrom" v-model="pick.selectionPickFrom" />
      </div>
      <div>
        <label for="selectionPickTo">To:</label>
        <InputText id="selectionPickTo" v-model="pick.selectionPickTo" />
      </div>
      <div>
        <label for="combineScore">Combine Score:</label>
        <InputText id="combineScore" v-model="pick.combineScore" />
      </div>
      <Button label="Create" type="submit" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePickStore } from '@/components/pick/store/pickStore';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';

const router = useRouter();
const pickStore = usePickStore();
const pick = ref({
  id: 0,
  teamId: 0,
  playerId: 0,
  player: '',
  selectionRound: 0,
  selectionNumber: 0,
  selectionYear: '',
  selectionPickFrom: '',
  selectionPickTo: '',
  combineScore: 0,
});

const createPick = async () => {
  await pickStore.createPick(pick.value);
  router.push('/');
};
</script>

<style>
/* Add any necessary styles here */
</style>

  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { usePickStore} from '@/stores/pickStore';
  import InputText from 'primevue/inputtext';
  import InputNumber from 'primevue/inputnumber';
  import Pick from '@/domain/interfaces/domainInterfaces';
  const route = useRoute();
  const pickStore = usePickStore();
  const pickId = Number(route.params.id);
  
  const pick = computed(() => {
    return pickStore.picks.find((pick: Pick) => pick.id === pickId);
  });
  </script>
  