import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchUserProfile = () => api.get("/users/profile");
export const googleAuth = () => api.post("/users/auth/google");
