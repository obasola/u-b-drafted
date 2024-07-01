<!-- components/PlayerAwardDetail.vue -->
<template>
    <div>
      <h3>Award Details</h3>
      <form @submit.prevent="save">
        <div>
          <label for="playerId">Player ID</label>
          <InputText id="playerId" v-model="award.playerId" />
        </div>
        <div>
          <label for="awardName">Award Name</label>
          <InputText id="awardName" v-model="award.award_name" />
        </div>
        <div>
          <label for="yearAwarded">Year Awarded</label>
          <InputText id="yearAwarded" v-model="award.year_awarded" />
        </div>
        <Button label="Save" type="submit" />
        <Button label="Close" type="button" @click="close" />
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  import PlayerAward from '@/domain/interfaces/domainInterfaces';
  import axios from '@/utils/axios';
  import { ref } from 'vue';

  const props = defineProps<{ award: PlayerAward }>();
  const emit = defineEmits(['close']);
  
  const award = ref({ ...props.award });
  
  const save = async () => {
    try {
      await axios.put(`/playerAward/${award.value.id}`, award.value);
      emit('close');
    } catch (error) {
      console.error('Error saving player award:', error);
    }
  };
  
  const close = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
/* Scoped styles for this component */
.p-dialog .p-dialog-content {
  background-color: green;
  border: 2px solid white; /* Adjust the border width if necessary */
}
</style>