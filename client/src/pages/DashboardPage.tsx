import { useEffect } from "react";
import NoteCard from "../components/notes/NoteCard";
import { useNotesStore } from "../store/notes";

function DashboardPage() {
  const getNotes = useNotesStore((state) => state.getNotes);
  const notes = useNotesStore((state) => state.notes);

  console.log({ notes });

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </>
  );
}

export default DashboardPage;
