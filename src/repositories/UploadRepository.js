import backend from './clients/AxiosClientApi';

const api = {
  uploadFile(payload) {
    return backend.post(`uploads/file`, payload);
  },
  uploadFiles(payload) {
    return backend.post(`uploads/files`, payload);
  },
};

export default api;
