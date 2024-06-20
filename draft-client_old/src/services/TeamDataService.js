import axiosInstance from '../api';

class TeamDataService {
  create(data) {
    return http.post('/team', data);
  }
  readMany() {
    return axiosInstance.get('/teams');
  }
  readOne(id) {
    return axiosInstance.get(`/team/${id}`);
  }
  update(id, data) {
    return axiosInstance.put(`/team/${id}`, data);
  }
  delete(id) {
    return axiosInstance.delete(`/team/${id}`);
  }
  deleteAll() { 
    return axiosInstance.delete('/team');
  }
  findByName(name) {
    return axiosInstance.get(`/team?name=${name}`);
  }
  async getTeamListDropdown() {
    await axiosInstance
      .get('/teams')
      .then((response) => {
        teams.value = response.data;

        //alert('data = ' + teams.value);
      })
      .catch((e) => {
        alert('error: ' + e);
      });
  }
}
export default TeamDataService;
