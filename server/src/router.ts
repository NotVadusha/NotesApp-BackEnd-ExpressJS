import { Router } from "express";
import notesController from "./notes.controller";
import { validateIDMidlleware } from "./middlewares/validateID.middleware";
import { isExistMiddleware } from "./middlewares/isExist.middleware";

const router = Router();

router.get(
  "/notes/:id",
  validateIDMidlleware,
  isExistMiddleware,
  notesController.getOne
); // Get one note
router.get("/notes", notesController.getAll); // Get all notes
router.post("/notes", notesController.create); // Set new note
router.put(
  "/notes/:id",
  validateIDMidlleware,
  isExistMiddleware,
  notesController.update
); // Update note
router.delete(
  "/notes/:id",
  validateIDMidlleware,
  isExistMiddleware,
  notesController.delete
); // Delete note

export default router;
