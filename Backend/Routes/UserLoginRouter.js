import { createUserLogin, getAllUserLogin, getUserLoginById, updatedUserLogin, deleteUserLogin } from "../Controller/UserLoginController.js";
import express from "express";

const router = express.Router();

router.post("/",createUserLogin);
router.get("/",getAllUserLogin);
router.get("/:id",getUserLoginById);
router.put("/:id",updatedUserLogin);
router.delete("/:id",deleteUserLogin);

export default router;