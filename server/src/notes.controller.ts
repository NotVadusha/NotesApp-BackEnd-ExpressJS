import Note from "./notes.validator";
import notesService from "./notes.service";
import { Request, Response } from "express";

class notesController {
  async create(req: Request, res: Response) {
    try {
      const {
        _id,
        title,
        content,
        is_archived,
        is_completed,
        created,
        is_updated,
        category,
      } = req.body;
      const note = await notesService.create({
        _id,
        title,
        content,
        is_archived,
        is_completed,
        created,
        is_updated,
        category,
      });
      res.json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const note = await notesService.getOne(req.params.id);
      return res.json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const notes = await notesService.getAll();
      return res.json(notes);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const updatedTodo = await notesService.update(req.body);
      return res.json(updatedTodo);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const note = await notesService.delete(req.params.id);
      return res.json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new notesController();
