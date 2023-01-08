import Router from "express-promise-router";
import {
  createNote,
  deleteNote,
  getNote,
  getNotes,
  updateNote,
} from "../controllers/notes.controller";
import { requireAuth } from "../middlewares/requireAuth";
import { validateSchema } from "../middlewares/validateSchema";
import { createNoteSchema } from "../schemas/note.schema";

const router = Router();

router.get("/notes", requireAuth, getNotes);

router.post(
  "/notes",
  requireAuth,
  validateSchema(createNoteSchema),
  createNote
);

router.get("/notes/:id", requireAuth, getNote);

router.delete("/notes/:id", requireAuth, deleteNote);

router.patch("/notes/:id", requireAuth, updateNote);

export default router;
