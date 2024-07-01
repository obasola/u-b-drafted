// src/api/schedule.ts

export interface Schedule {
    id: number;
    teamID: number;
    opponentId: number;
    scheduleWeek: number;
    gameDate: Date;
    gameCity: string;
    gameStateProvince: string;
    gameCountry: string;
    gameLocation: string;
    opponentConference: string;
    opponentDivision: string;
    winLostFlag: string;
    homeOrAway: string;
  }
  
  import axios from 'axios';
  
  const apiClient = axios.create({
    baseURL: 'http://localhost:3000', // Change to your API base URL
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  export default {
    getSchedules() {
      return apiClient.get('/schedules');
    },
    getSchedule(id: number) {
      return apiClient.get(`/schedules/${id}`);
    },
    createSchedule(schedule: Schedule) {
      return apiClient.post('/schedules', schedule);
    },
    updateSchedule(schedule: Schedule) {
      return apiClient.put(`/schedules/${schedule.id}`, schedule);
    },
    deleteSchedule(id: number) {
      return apiClient.delete(`/schedules/${id}`);
    },
  };
  