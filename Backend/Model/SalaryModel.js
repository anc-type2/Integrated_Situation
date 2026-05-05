import mongoose from "mongoose";

const SalarySchema = new mongoose.Schema({
    "GlossySalary": Number,
    "TotalDeduction":Number,
    "NetSalary": Number,
    "Month":String
})


export default mongoose.model("Salary",SalarySchema);