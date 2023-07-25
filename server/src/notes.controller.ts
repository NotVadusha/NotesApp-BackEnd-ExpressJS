import notesService from "./notes.service";
import { Request, Response } from "express";

class notesController {
  async create(req: Request, res: Response) {
    const { title, content, is_archived, is_completed, category } = req.body;
    const note = await notesService.create({
      title,
      content,
      is_archived,
      is_completed,
      created_at: new Date(),
      updated_at: new Date(),
      category,
    });
    res.json(note);
  }

  async getOne(req: Request, res: Response) {
    const note = await notesService.getOne(req.params.id);
    return res.json(note);
  }

  async getAll(req: Request, res: Response) {
    const notes = await notesService.getAll();
    return res.json(notes);
  }

  async update(req: Request, res: Response) {
    const { title, content, is_archived, is_completed, created_at, category } =
      req.body;
    const updatedNote = {
      title,
      content,
      is_archived,
      is_completed,
      updated_at: new Date(),
      category,
    };
    const toResponseNote = await notesService.update(
      updatedNote,
      req.params.id
    );
    return res.json(toResponseNote);
  }

  async delete(req: Request, res: Response) {
    const note = await notesService.delete(req.params.id);
    return res.json(note);
  }
}

export default new notesController();
