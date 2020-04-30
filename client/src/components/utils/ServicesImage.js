import axios from "axios";

const api = axios.create({
  baseURL: "/api/image",
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
