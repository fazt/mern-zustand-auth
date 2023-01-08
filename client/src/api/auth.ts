import axios from "../libs/axios";

export const loginRequest = async (email: string, password: string) =>
  axios.post("/api/auth/login", {
    email,
    password,
  });

export const profileRequest = async () => axios.get("/api/auth/profile");
