import { Router } from "express";
import notesController from "./notes.controller";
import { validIdMiddleware } from "./middlewares/validId.middleware";
import { isExistMiddleware } from "./middlewares/isExit.middleware";

const router = Router();

router.get(
  "/notes/:id",
  validIdMiddleware,
  isExistMiddleware,
  notesController.getOne
); // Get one note
router.get("/notes", notesController.getAll); // Get all notes
router.post("/notes", notesController.create); // Set new note
router.put(
  "/notes/:id",
  validIdMiddleware,
  isExistMiddleware,
  notesController.update
); // Update note
router.delete(
  "/notes/:id",
  validIdMiddleware,
  isExistMiddleware,
  notesController.delete
); // Delete note

export default router;
