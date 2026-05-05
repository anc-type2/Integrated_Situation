import express from "express";
import { createSalary } from "../Controller/SalaryController.js";


const router = express.Router();

router.post("/",createSalary);

export default router;