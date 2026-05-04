import mongoose from "mongoose";

const SalarySchema = new mongoose.Schema({
    "GlossySalary": Number,
    "TotalDeduction":String,
    "NetSalary": Number,
    "Month":Number
})


export default mongoose.model("Salary",SalarySchema);