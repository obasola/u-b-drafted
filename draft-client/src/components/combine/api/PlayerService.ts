import apiClient from '@/utils/axios';
import Player from '@/domain/interfaces/Player';
import { reactive, ref } from 'vue';

export interface PlayerName {
  id: 0,
  fullName: '',
}
const nameList  = ref([{
  id: 0,
  fullName: '',
}]);

const playerList = ref([{
  id: 0,
  firstName: '',
  lastName: '',
  age: 0,
  height: 0,
  weight: 0,
  handSize: 0,
  armLength: 0,
  homeCity: '',
  homeState: '',
  university: '',
  year_entered_league: '',
  pickId: 0,
  position: '',
}]);

export const getPlayers = () => {
  return apiClient.get<Player[]>('/players');
};