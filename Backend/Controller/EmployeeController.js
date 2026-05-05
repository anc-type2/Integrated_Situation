import Employee from "../Model/EmployeeModel.js";

export const createEmployee = async (req,res) =>{
    try {
        const {EmployeeId,FirstName,LastName,Address,Position,Telephone,Gender,HiredDate} = req.body;
        const newEmployee = new Employee({
            EmployeeId,
            FirstName,
            LastName,
            Address,
            Position,
            Telephone,
            Gender,
            HiredDate

        })
        await newEmployee.save();
        res.status(201).json({message:"Employee created successfully", data:newEmployee});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//GET ALL EMPLOYEES

export const getAllEmployees = async (req,res) => {
    try {
        const employeesData = await Employee.find();
        if (!employeesData || employeesData ===0) {
            res.status(404).json({message: "No Employees found"});
        }
        res.status(200).json({message:"All Employees retrieved successfully", data:employeesData});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//GET EMPLOYEES BY ID

export const getEmployeeById = async (req,res) => {
    try {
        const id = req.params.id;
        const employeeData = await Employee.findById(id);
        if (!employeeData) {
            res.status(404).json({message: "Employee not found"});
        }
        res.status(200).json({message: "Employee retrived successfully", data:employeeData});
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

//UPDATE EMPLOYEES

export const updateEmployee = async (req,res) => {
    try {
        const id = req.params.id;
   
        const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body,{
            new: true
        })
        if (!updatedEmployee) {
            res.status(404).json({message: "Employee not found"});
        }
        res.status(200).json({message: "Employee Updated successfully", data:updatedEmployee});
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//DELETE EMPLOYEES

export const deleteEmployee = async (req,res) => {
    try {
        const id = req.params.id;
        const employeeData = await Employee.findById(id);
        if (!employeeData) {
            res.status(404).json({message: "Employee not found"});
        }
        const deletedEmployee = await Employee.findByIdAndDelete(id);
        res.status(200).json({message: "Employee deleted successfully", data:deletedEmployee});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}