import axios from "axios";

const api = axios.create({
  baseURL: "/api/Gallery",
});
const apiup = axios.create({
  baseURL: "",
});

export const insertGallery = (payload) => api.post(`/add`, payload);
export const getAllGallery = () => api.get(`/getGallery`);
export const deleteGById = (id) => api.delete(`/delete/${id}`);
export const uploadImg = (payload) => apiup.post(`/upload`, payload);
export const uploadAudio = (payload) => apiup.post(`/uploadau`, payload);

const apis = {
  insertGallery,
  getAllGallery,
  deleteGById,
  uploadImg,
  uploadAudio,
};

export default apis;
