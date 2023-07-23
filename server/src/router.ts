import Router from "express";
import notesController from "./notes.controller";
import notesMiddleware from "./notes.middleware";
import { Request, Response, NextFunction } from "express";

const router = Router();
router.use(notesMiddleware);

router.get("/notes/:id", (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("There is no ID");
  }
  notesController.getOne(req, res);
}); // Get one note

router.get("/notes", notesController.getAll); // Get all notes

router.post("/notes", notesController.create); // Set new note

router.put("/notes", (req: Request, res: Response) => {
  if (!req.body._id) {
    throw new Error("There is no ID");
  }
  notesController.update(req, res);
}); // Update note

router.delete("/notes/:id", (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("There is no ID");
  }
  notesController.delete(req, res);
}); // Delete note

export default router;
