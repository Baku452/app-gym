import backend from './clients/AxiosClientApi';

const api = {
  get(params) {
    return backend.get(`business-objects/products`, { params });
  },
  getBusinessObject(id) {
    return backend.get(`business-objects/products/${id}`);
  },
  store(payload) {
    return backend.post(`business-objects/products`, payload);
  },
  update(payload) {
    return backend.put(`business-objects/products/${payload.id}`, payload);
  },
  delete(id) {
    return backend.delete(`business-objects/products/${id}`);
  },
};

export default api;
