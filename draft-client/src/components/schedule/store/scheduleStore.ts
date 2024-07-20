// src/components/schedule/store/scheduleStore.ts

import { defineStore } from 'pinia';
import Schedule from '@/domain/interfaces/Schedule';
import scheduleApi from '@/api/schedule';
import ScheduleData from '@/domain/ScheduleData';
import ScheduleImpl from '@/domain/ScheduleImpl';

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
      homeOrAway: { label: '', value: '' },
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
    async createSchedule(schedule: ScheduleData) {
      let scheduleImpl = new ScheduleImpl(schedule);
      let data =scheduleImpl.mapDomain2EntityObject();
      await scheduleApi.createSchedule(data);
      this.fetchSchedules();
    },
    async updateSchedule(schedule: ScheduleData) {
      let scheduleImpl = new ScheduleImpl(schedule);
      let data =scheduleImpl.mapDomain2EntityObject();
      await scheduleApi.updateSchedule(data);
    },
    async deleteSchedule(id: number) {
      await scheduleApi.deleteSchedule(id);
      this.fetchSchedules();
    },
  },
});
