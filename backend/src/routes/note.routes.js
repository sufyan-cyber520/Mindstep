import express from 'express';
import {
  createNote,
  getUserNotes,
  updateNote,
  deleteNote
} from "../controllers/note.controllers.js";
import { verifyJWT }  from '../middleware/auth.js';

const router = express.Router();

router.post("/", verifyJWT, createNote);
router.get("/", verifyJWT, getUserNotes);
router.put("/:id", verifyJWT, updateNote);
router.delete("/:id", verifyJWT, deleteNote);

export default router;