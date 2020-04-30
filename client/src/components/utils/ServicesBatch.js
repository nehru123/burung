import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
  baseURL: "/api/batch",
});
export const insertBatch = (payload) => api.post(`/add`, payload);
export const getBatchById = (id, payload) => api.get(`/getBatch/${id}`);
export const getName = (id, payload) => api.get(`/getname/${id}`);
export const updateBirdById = (id, payload) =>
  api.put(`/update/${id}`, payload);
export const deleteBirdById = (id) => api.delete(`/delete/${id}`);
=======
    baseURL: '/api/batch',
})

export const insertBatch = payload => api.post(`/add`, payload)
export const getBatchById = (id, payload) => api.get(`/getBatch/${id}`)
export const getName = (id, payload) => api.get(`/getname/${id}`)
export const updateBirdById = (id, payload) => api.put(`/update/${id}`, payload)
export const deleteBirdById = id => api.delete(`/delete/${id}`)
>>>>>>> b000c7cc387f06065e903ca3cf703dceabb9b4ca
const apis = {
  insertBatch,
  getBatchById,
  getName,
  updateBirdById,
  deleteBirdById,
};

export default apis;
