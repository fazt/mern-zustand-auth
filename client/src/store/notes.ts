import create from "zustand";
import { getNotesRequest } from "../api/notes";
import { Note } from "../types/Note.interface";

type Store = {
  notes: Note[];
  getNotes: () => Promise<void>;
};

export const useNotesStore = create<Store>((set) => ({
  notes: [],
  getNotes: async () => {
    const res = await getNotesRequest();
    set({ notes: res.data });
  },
}));
