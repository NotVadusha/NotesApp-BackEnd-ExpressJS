import { Router } from "express";
import notesController from "./notes.controller";
import { idMiddleware } from "./middlewares/id.middleware";

const router = Router();

router.get("/notes/:id", idMiddleware, notesController.getOne); // Get one note
router.get("/notes", notesController.getAll); // Get all notes
router.post("/notes", notesController.create); // Set new note
router.put("/notes/:id", idMiddleware, notesController.update); // Update note
router.delete("/notes/:id", idMiddleware, notesController.delete); // Delete note

export default router;
