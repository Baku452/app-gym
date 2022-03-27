import backend from './clients/AxiosClientApi';

const api = {
  get(params) {
    return backend.get(`sessions`, { params });
  },
  getBlog(id) {
    return backend.get(`sessions/${id}`);
  },
  store(payload) {
    return backend.post(`sessions`, payload);
  },
  update(payload) {
    return backend.put(`sessions/${payload.id}`, payload);
  },
  delete(id) {
    return backend.delete(`sessions/${id}`);
  },
};

export default api;
