import axiosInstance from '../api';

class PlayerDataService {
  create(data) {
    return http.post('/player', data);
  }
  readMany() {
    return axiosInstance.get('/players');
  }
  readOne(id) {
    return axiosInstance.get(`/player/${id}`);
  }
  update(id, data) {
    return axiosInstance.put(`/player/${id}`, data);
  }
  delete(id) {
    return axiosInstance.delete(`/player/${id}`);
  }
  deleteAll() { 
    return axiosInstance.delete('/player');
  }
  findByName(name) {
    return axiosInstance.get(`/player?name=${name}`);
  }
  async getTeamListDropdown() {
    await axiosInstance
      .get('/teams')
      .then((response) => {
        players.value = response.data;

        //alert('data = ' + players.value);
      })
      .catch((e) => {
        alert('error: ' + e);
      });
  }
}
export default PlayerDataService;
