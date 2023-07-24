import { Router } from "express";
import notesController from "./notes.controller";
import { idCheckMiddleware } from "./middlewares/notes.idMiddleware";

const router = Router();

router.get("/notes/:id", idCheckMiddleware, notesController.getOne); // Get one note
router.get("/notes", notesController.getAll); // Get all notes
router.post("/notes", notesController.create); // Set new note
router.put("/notes/:id", idCheckMiddleware, notesController.update); // Update note
router.delete("/notes/:id", idCheckMiddleware, notesController.delete); // Delete note

export default router;
