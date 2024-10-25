import express from "express";
import { createrecipe, deleterecipe, getAllrecipes, getrecipeById, updaterecipe } from "../Controllers/recipeController.js";

const router = express.Router();

router.post("/create",createrecipe);
router.get("/getdata",getAllrecipes)
router.get("/getdata/:id",getrecipeById)
router.put("/update/:id",updaterecipe)
router.delete("/delete/:id",deleterecipe)
export default router;