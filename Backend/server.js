import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import DepartmentRouter from "./Routes/DepartmentRouter.js";
import EmployeeRouter from "./Routes/EmployeeRouter.js";
import SalaryRouter from "./Routes/SalaryRouter.js";
import UserLoginRouter from "./Routes/UserLoginRouter.js";

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4040;
const MONGO_URL = process.env.MONGO_URL ;

mongoose
        .connect(MONGO_URL)
        .then(() =>{
                console.log("DATABASE CONNECTED SUCCESSFULLY👍👍");
                app.listen(PORT, ()=> {
                    console.log(`SERVER IS RUNNING ON PORT ${PORT}🛩️🛩️`);
                })
            })
        .catch((error) => console.log(error.message));
        
      

app.use("/api/departments",DepartmentRouter);
app.use("/api/employees",EmployeeRouter);
app.use("/api/salary",SalaryRouter);
app.use("/api/userlogin",UserLoginRouter);