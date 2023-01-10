import { Note } from "../../types/Note.interface";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { deleteNoteRequest } from "../../api/notes";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  note: Note;
}

function NoteCard({ note }: Props) {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteNoteRequest, {
    onSuccess: () =>
      queryClient.setQueriesData(["notes"], (old) =>
        old.filter((n: Note) => n._id !== note._id)
      ),
  });

  return (
    <div
      key={note._id}
      className="relative flex items-center space-x-3 rounded-lg border border-gray-800 bg-neutral-800 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-500 "
      onDoubleClick={() => {
        mutation.mutate(note._id);
      }}
    >
      <div className="flex-shrink-0">
        <PencilSquareIcon className="h-7 w-7 rounded-full" />
      </div>
      <div className="min-w-0 flex-1">
        <a href="#" className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-sm font-medium text-gray-100">{note.title}</p>
          <p className="truncate text-sm text-gray-500">{note.description}</p>
        </a>
      </div>
    </div>
  );
}

export default NoteCard;
