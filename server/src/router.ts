import Router from "express";
import notesController from "./notes.controller";
import notesMiddleware from "./notes.middleware";

const router = Router();
router.use(notesMiddleware);

router.get("/notes/:id", notesController.getOne); // Get one note
router.get("/notes", notesController.getAll); // Get all notes
router.post("/notes", notesController.create); // Set new note
router.put("/notes", notesController.update); // Update note
router.delete("/notes/:id", notesController.delete); // Delete note

export default router;
