import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

//error handling
export const insertPost = (payload) => api.post(`/post`, payload);
export const getAllPosts = () => api.get(`/`);
export const updatePostById = (id, payload) => api.put(`/post/${id}`, payload);
export const deletePostById = (id) => api.delete(`/post/${id}`);
export const getPostById = (id) => api.get(`/post/${id}`);

const apis = {
  insertPost,
  getAllPosts,
  updatePostById,
  deletePostById,
  getPostById,
};

export default apis;
