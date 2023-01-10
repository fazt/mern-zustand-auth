import { Request, Response } from "express";
import Note from "../models/Note";
import User from "../models/User";
import { NotFound } from "http-errors";
import { CreateNoteSchema } from "../schemas/note.schema";

export const getNotes = async (req: Request, res: Response) => {
  const notes = await Note.find({
    author: req.user._id,
  });
  res.json(notes);
};

export const createNote = async (
  req: Request<unknown, unknown, CreateNoteSchema>,
  res: Response
) => {
  const { title, description } = req.body;

  // find note's author
  const userFound = await User.findById(req.user._id);
  if (!userFound) throw new NotFound("User not found");

  // create a new note
  const newNote = new Note({
    title,
    description,
    author: req.user._id,
  });

  // save note
  const noteSaved = await newNote.save();

  // save user's note to the client
  res.json(noteSaved);
};

export const getNote = async (req: Request, res: Response) => {
  const noteFound = await Note.findById(req.params.id);
  if (!noteFound) throw new NotFound("Note not found");
  res.json(noteFound);
};

export const deleteNote = async (req: Request, res: Response) => {
  const deletedNote = await Note.findByIdAndDelete(req.params.id);
  if (!deletedNote) throw new NotFound("Note not found");
  res.sendStatus(204);
};

export const updateNote = async (req: Request, res: Response) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(note);
};
