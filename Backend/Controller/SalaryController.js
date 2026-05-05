import Salary from "../Model/SalaryModel.js";

export const createSalary = async (req,res) => {
    try{
        const {GlossySalary,TotalDeduction,NetSalary,Month} = req.body;
        const newSalary = new Salary({
            GlossySalary,
            TotalDeduction,
            NetSalary,
            Month
        })
        await newSalary.save();
        res.status(201).json({message:"Salary entered successfully", data:newSalary});
    }
    catch(error){
        res.status(500).json({message:"Error creating Salary", error});
    }
}