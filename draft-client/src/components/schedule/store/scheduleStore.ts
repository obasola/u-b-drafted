// src/components/schedule/store/scheduleStore.ts

import { defineStore } from 'pinia';
import { Schedule } from '@/api/schedule';
import scheduleApi from '@/api/schedule';

export const useScheduleStore = defineStore('schedule', {
  state: () => ({
    schedules: [] as Schedule[],
    schedule: {
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
    },
  }),
  actions: {
    async fetchSchedules() {
      const response = await scheduleApi.getSchedules();
      this.schedules = response.data;
    },
    async fetchSchedule(id: number) {
      const response = await scheduleApi.getSchedule(id);
      this.schedule = response.data;
    },
    async createSchedule(schedule: Schedule) {
      await scheduleApi.createSchedule(schedule);
      this.fetchSchedules();
    },
    async updateSchedule(schedule: Schedule) {
      await scheduleApi.updateSchedule(schedule);
      this.fetchSchedules();
    },
    async deleteSchedule(id: number) {
      await scheduleApi.deleteSchedule(id);
      this.fetchSchedules();
    },
  },
});
