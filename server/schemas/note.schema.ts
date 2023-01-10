import { z } from "zod";

export const createNoteSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    description: z.string({
      required_error: "Description is required",
    }),
  }),
});

export type CreateNoteSchema = z.infer<typeof createNoteSchema>["body"];
