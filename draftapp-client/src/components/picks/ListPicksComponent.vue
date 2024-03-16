<template>
  <q-page>
    <h2>Pick List</h2>
    <div style="float: right; margin-right: 0.7em">
      <q-btn
        v-on:click="getPicks()"
        label="Refresh"
        type="submit"
        color="primary"
      />
      <q-btn
        v-on:click="addPick()"
        label="Add Pick"
        type="submit"
        color="primary"
      />
    </div>
    <div id="q-app" style="min-height: 100vh">
      <div class="q-pa-md">
        <q-table
          @row-click="editPick"
          title="Picks"
          :rows="store.picks"
          :columns="columns"
          row-key="id"
        ></q-table>
      </div>
    </div>
  </q-page>
</template>
<!-- ******************* SCRIPT BEGINS HERE ******************** -->
<!-- ******************* SCRIPT BEGINS HERE ******************** -->
<!-- ******************* SCRIPT BEGINS HERE ******************** -->
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, reactive, onMounted, computed } from 'vue';
import Pick from 'src/domain/domainInterfaces';

import axios from 'axios';
import { QTableProps } from 'quasar';
import { route } from 'quasar/wrappers';


import { usePickStore } from '../../stores/pick-store';

const store = usePickStore();


const router = useRouter();

//const picks = ref<Pick>([]);
const picks = reactive(store.picks);
onMounted(() => {
 // alert('getting data now');
  getData();
  //store.fetchPicks;
});


function getPicks() {
  let result = store.getPickData;
 // alert('Row count in cache = ' + result.length);
  return result;
}
function addPick() {
  router.push({path: '/editPick?param=add'} )
}
async function getData() {
  //alert('getting data');

  await axios
    .get('http://localhost:3000/picks')
    .then((response) => {
      store.picks = response.data;

      alert('Rows found = ' + store.picks.length);
    })
    .catch((e) => {
      alert('error: ' + e);
    });
}
function editPick() {
  router.push({ path: '/editPick' });
}

//const rows: QTableProps['rows'] = picks;

const columns: QTableProps['columns'] = [
  {
    name: 'teamId',
    align: 'left',
    label: 'Team',
    field: 'teamId',
    sortable: true,
  },
  {
    name: 'player',
    align: 'left',
    label: 'Player',
    field: 'player',
    sortable: true,
  },
  {
    name: 'selectionRound',
    align: 'left',
    label: 'Round',
    field: 'selectionRound',
    sortable: true,
  },
  {
    name: 'selectionNumber',
    align: 'left',
    label: 'Number',
    field: 'selectionNumber',
    sortable: true,
  },
  {
    name: 'selectionPickFrom',
    align: 'left',
    label: 'Pick From',
    field: 'selectionPickFrom',
    sortable: true,
  },
  {
    name: 'selectionPickTo',
    align: 'left',
    label: 'Pick Sent To',
    field: 'selectionPickTo',
    sortable: true,
  },
];
</script>
