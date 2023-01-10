import axios from "../libs/axios";

export const loginRequest = async (email: string, password: string) =>
  axios.post("/api/auth/login", {
    email,
    password,
  });

interface registerData {
  email: string;
  password: string;
  fullName: string;
}

export const registerRequest = async (data: registerData) =>
  axios.post("/api/auth/register", data);

export const profileRequest = async () => axios.get("/api/auth/profile");
