import { Note } from "../../types/Note.interface";

interface Props {
  note: Note;
}

function NoteCard({ note }: Props) {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default NoteCard;
