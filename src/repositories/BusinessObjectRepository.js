import backend from './clients/AxiosClientApi';

const api = {
  get(params) {
    return backend.get(`business-objects`, { params });
  },
  getBusinessObject(id) {
    return backend.get(`business-objects/${id}`);
  },
  store(payload) {
    return backend.post(`business-objects`, payload);
  },
  update(payload) {
    return backend.put(`business-objects/${payload._id}`, payload);
  },
  delete(id) {
    return backend.delete(`business-objects/${id}`);
  },
};

export default api;
