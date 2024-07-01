<template>
  <DataTable :value="combineScores">
    <Column field="id" header="ID"></Column>
    <Column field="fortyTime" header="Forty Time"></Column>
    <!-- Add more columns as needed -->
    <Column header="Actions">
      <template #body="slotProps">
        <Button label="Details" @click="viewDetails(slotProps.data.id)" />
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCombineScoreStore } from './store/combineScoreStore';
import { useRouter } from 'vue-router';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

const combineScoreStore = useCombineScoreStore();
const router = useRouter();
const combineScores = ref(combineScoreStore.combineScores);

onMounted(() => {
  combineScoreStore.fetchCombineScores();
});

const viewDetails = (id: number) => {
  router.push({ name: 'CombineScoreDetail', params: { id } });
};
</script>

<style>
/* Add any necessary styling here */
</style>
