import NoteCard from "./NoteCard";
import { useQuery } from "@tanstack/react-query";
import { getNotesRequest } from "../../api/notes";
import { ArchiveBoxIcon } from "@heroicons/react/24/solid";

function NoteList() {
  const {
    data: notes,
    isLoading,
    error,
  } = useQuery(["notes"], getNotesRequest);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message} </div>;

  if (notes?.length === 0)
    return (
      <div className="h-[calc(100vh-150px)] flex items-center justify-center">
        <div>
          <ArchiveBoxIcon className="h-40 w-40 text-gray-500 m-auto" />
          <h1 className="text-center text-2xl">You don't have notes yet</h1>
        </div>
      </div>
    );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {notes.map((note) => (
        <NoteCard note={note} key={note._id} />
      ))}
    </div>
  );
}

export default NoteList;
