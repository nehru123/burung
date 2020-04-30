import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
  baseURL: "/api/image",
=======
  baseURL: "/api/image"
>>>>>>> b000c7cc387f06065e903ca3cf703dceabb9b4ca
});
const apiup = axios.create({
  baseURL: "",
});

export const insertImage = (payload) => api.post(`/add`, payload);
export const getImage = (id) => api.get(`/getImage/${id}`);
export const deleteGById = (id) => api.delete(`/delete/${id}`);
export const uploadImg = (payload) => apiup.post(`/upload`, payload);

const apis = {
  insertImage,
  getImage,
  deleteGById,
  uploadImg,
};

export default apis;
