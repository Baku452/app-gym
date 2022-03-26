import backend from './clients/AxiosClientApi';

const api = {
  get(params) {
    return backend.get(`users`, { params });
  },
  getBlog(id) {
    return backend.get(`users/${id}`);
  },
  store(payload) {
    return backend.post(`users`, payload);
  },
  update(payload) {
    return backend.put(`users/${payload.id}`, payload);
  },
  delete(id) {
    return backend.delete(`users/${id}`);
  },
};

export default api;
