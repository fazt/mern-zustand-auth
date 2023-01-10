import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createNoteRequest } from "../api/notes";

type Inputs = {
  title: string;
  description: string;
};

function NoteFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation(createNoteRequest, {
    onSuccess: (data) =>
      queryClient.setQueriesData(["notes"], (old) => [...old, data]),
  });

  const onSubmit: SubmitHandler<Inputs> = ({ title, description }) => {
    mutation.mutate({
      title,
      description,
    });
    navigate("/dashboard");
  };

  return (
    <div className="h-[calc(100vh-150px)] flex items-center justify-center">
      <form className="bg-slate-800 p-10" onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-2 font-bold text-md">Write a Title:</label>
        <input
          type="text"
          placeholder="some note title"
          className="bg-gray-900 px-4 py-2 rounded-md w-full"
          autoFocus
          {...register("title", { required: true, minLength: 3, maxLength: 50 })}
        />
        <p>
          {errors.title?.type === "required" && (
            <span className="text-red-300 my-7">This field is required</span>
          )}
        </p>
        <p>
          {errors.title?.type === "minLength" && (
            <span className="text-red-300 my-7">This field is too Small</span>
          )}
        </p>
        <p>
          {errors.title?.type === "maxLength" && (
            <span className="text-red-300 my-7">This field is too Large</span>
          )}
        </p>

        <label className="block mb-2 font-bold text-md">Description:</label>
        <textarea
          name="description"
          rows="3"
          className="bg-gray-900 px-4 py-2 rounded-md w-full"
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea>
        <p>
          {errors.description && (
            <span className="text-red-300 my-7">This field is required</span>
          )}
        </p>

        <div className="flex justify-end mt-3">
          <button className="block bg-indigo-500 px-4 py-2 rounded-md">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default NoteFormPage;
