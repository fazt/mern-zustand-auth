import axios from "../libs/axios";

export const loginRequest = async (email: string, password: string) =>
  axios.post("/auth/login", {});

export const profileRequest = async (token: string) =>
  axios.get("/auth/profile");
