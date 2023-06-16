import http from '../http-common';

class PlayerDataService {
  getAll() {
    return http.get('/players');
  }

  get(id) {
    return http.get(`/player/${id}`);
  }

  create(data) {
    return http.post('/players', data);
  }

  update(id, data) {
    return http.put(`/players/${id}`, data);
  }

  delete(id) {
    return http.delete(`/players/${id}`);
  }

  deleteAll() {
    return http.delete('/players');
  }

  findByName(name) {
    return http.get(`/players?name=${name}`);
  }
}
export default PlayerDataService;
