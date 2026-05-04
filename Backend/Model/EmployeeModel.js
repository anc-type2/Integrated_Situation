import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    "EmployeeId": String,
    "FirstName": String,
    "LastName": String,
    "Address": String,
    "Position": String,
    "Telephone": Number,
    "Gender": String,
    "HiredDate": String,
})

export default mongoose.model("Employee", EmployeeSchema);