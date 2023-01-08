import axios from "../libs/axios";

export const getNotesRequest = async () => await axios.get("/api/notes");
