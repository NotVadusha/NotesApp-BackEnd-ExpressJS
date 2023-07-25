import { Request, NextFunction, Response } from "express";
import { HttpError } from "../utils/notes.errors";
import NotesDB from "../database.model";

const validateNoteOnSaveMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const note = new NotesDB({ ...req.body });
    console.log(note);
    const error = await note.validate({
      pathsToSkip: ["created_at", "updated_at"],
    });
    next();
  } catch (error) {
    next(error);
  }
};

export { validateNoteOnSaveMiddleware };
