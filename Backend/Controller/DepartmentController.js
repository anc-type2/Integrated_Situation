import DepartmentModel from "../Model/DepartmentModel.js";

export const createDepartment = async (req,res) => {
    try {
        const {DepartmentId,DepartmentName,GlossySalary} = req.body;
        const newDepartment = new DepartmentModel({
            DepartmentId,
            DepartmentName,
            GlossySalary
        })   
        
        await newDepartment.save();
        res.status(201).json({message:"Department created  successfully", data:newDepartment});

    } catch (error) {
        res.status(500).json({message:"Error creating department", error});
    }
}