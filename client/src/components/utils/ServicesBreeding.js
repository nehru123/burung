import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
  baseURL: "/api/breeding",
});
=======
    baseURL: '/api/breeding',
})
>>>>>>> b000c7cc387f06065e903ca3cf703dceabb9b4ca

export const insertBreeding = (payload) => api.post(`/add`, payload);
export const getBetina = () => api.get(`/getBetina`);
export const getJantan = () => api.get(`/getJantan`);
export const getBreeding = () => api.get(`/getBreeding`);
export const updateBirdById = (id, payload) =>
  api.put(`/update/${id}`, payload);
export const deleteBirdById = (id) => api.delete(`/delete/${id}`);
export const getBreedingById = (id) => api.get(`/find/${id}`);
export const getNameById = (id) => api.get(`/getname/${id}`);

const apis = {
  getBetina,
  getJantan,
  getBreeding,
  insertBreeding,
  deleteBirdById,
  getBreedingById,
  updateBirdById,
  getNameById,
};

export default apis;
