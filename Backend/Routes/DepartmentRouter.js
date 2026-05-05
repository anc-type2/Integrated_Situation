import express from "express";

import { createDepartment } from "../Controller/DepartmentController.js";


const router = express.Router();

router.post("/",createDepartment);



export default router;