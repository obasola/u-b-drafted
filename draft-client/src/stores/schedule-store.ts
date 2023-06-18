import { defineStore } from 'pinia';

export const useScheduleStore = defineStore('schedule', {
  state: () => ({
    schedule: {
      id: 9,
      teamID: 9,
      opponentId: 9,
      scheduleWeek: 9,
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
  getters: {
    getScheduleData: (state) => state.schedule,
  },
  actions: {
    resetScheduleData() {
      (this.schedule.id = 0),
        (this.schedule.teamID = 0),
        (this.schedule.opponentId = 0),
        (this.schedule.scheduleWeek = 0),
        (this.schedule.gameDate = new Date()),
        (this.schedule.gameCity = ''),
        (this.schedule.gameStateProvince = ''),
        (this.schedule.gameCountry = ''),
        (this.schedule.gameLocation = ''),
        (this.schedule.opponentConference = ''),
        (this.schedule.opponentDivision = ''),
        (this.schedule.winLostFlag = ''),
        (this.schedule.homeOrAway = '');
    },
  },
});
