import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
  baseURL: "/api/Gallery",
=======
  baseURL: "/api/gallery"
>>>>>>> b000c7cc387f06065e903ca3cf703dceabb9b4ca
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
