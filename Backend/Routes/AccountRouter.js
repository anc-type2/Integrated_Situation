import express from "express";  
import { createAccount, loginUser } from "../Controller/AccountController.js";

const router = express.Router();

router.post("/", createAccount);
router.post("/login", loginUser);

export default router;