import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({
    DepartmentId: {type: String, required: true, unique:true},
    DepartmentName:String,
    GlossySalary: Number
});


export default mongoose.model("Department",DepartmentSchema);