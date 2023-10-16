import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  authorController,
  createAuthorController,
  deleteAuthorCOntroller,
  singleAuthorController,
  updateAuthorController,
} from "../controllers/authorController.js";

const router = express.Router();

router.post("/create-author", requireSignIn, isAdmin, createAuthorController);

router.put(
  "/update-author/:id",
  requireSignIn,
  isAdmin,
  updateAuthorController
);

router.get("/get-author", authorController);

router.get("/single-author/:slug", singleAuthorController);

router.delete(
  "/delete-author/:id",
  requireSignIn,
  isAdmin,
  deleteAuthorCOntroller
);

export default router;
