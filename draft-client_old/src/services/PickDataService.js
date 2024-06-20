import axiosInstance from '../api';

class PickDataService {
  create(data) {
    return http.post('/picks', data);
  }
  readMany() {
    return axiosInstance.get('/pick');
  }
  readOne(id) {
    return axiosInstance.get(`/pick/${id}`);
  }
  update(id, data) {
    return axiosInstance.put(`/pick/${id}`, data);
  }
  delete(id) {
    return axiosInstance.delete(`/pick/${id}`);
  }
  deleteAll() { 
    return axiosInstance.delete('/pick');
  }
  findByName(name) {
    return axiosInstance.get(`/pick?name=${name}`);
  }
  async getTeamListDropdown() {
    await axiosInstance
      .get('/teams')
      .then((response) => {
        picks.value = response.data;

        //alert('data = ' + picks.value);
      })
      .catch((e) => {
        alert('error: ' + e);
      });
  }
}
export default PickDataService;
