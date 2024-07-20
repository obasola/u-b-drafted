// src/api/schedule.ts
import Schedule from '@/domain/interfaces/Schedule';

  
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
      return apiClient.get(`/schedule/${id}`);
    },
    createSchedule(schedule: Schedule) {
      return apiClient.post('/schedule', schedule);
    },
    updateSchedule(schedule: Schedule) {
      return apiClient.put(`/schedule/${schedule.id}`, schedule);
    },
    deleteSchedule(id: number) {
      return apiClient.delete(`/schedule/${id}`);
    },
  };
  