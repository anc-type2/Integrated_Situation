import UserLogin from "../Model/UserLoginModel.js";

export const createUserLogin = async (req,res) => {
    try {
        const {Username,Password} = req.body;
        const newUserLogin = new UserLogin({
            Username,
            Password
        });
        await newUserLogin.save();
        res.status(201).json({message:"User Login Created successfully",data:newUserLogin});
    } catch (error) {
        res.status(500).json({message:"Error creating User Login", error});
    }
}

//GET ALL USER LOGIN

export const getAllUserLogin = async (req,res) => {
    try {
        const userLoginData = await UserLogin.find();
        if (!userLoginData) {
            res.status(404).json({message: "NO user Login Found"});
        }
        res.status(200).json({message: "All users login retriedved successfuly", data:userLoginData});
    } catch (error) {
        res.status(500).json({message: "error retrieving user login data". error});
    }
}

//GET USER LOGIN BY ID

export const getUserLoginById = async (req,res) => {
    try {
        const id = req.params.id;
        const userLoginData = await UserLogin.findById(id);
        if(!userLoginData) {
            res.status(404).json({message: "User Login not found"});
        }
        res.status(200).json({message: "user Login retrieved successfully", data: userLoginData});
    } catch (error) {
        res.status(500).json({message:  "Error retrieving User Login data", error});
    }
}

//UPDATE USER LOGIN

export const updatedUserLogin = async (req,res) => {
    try {
        const id = req.params.id;
        const updatedUserLogin = await userLoginData.findByIdAndUpdate(id);
        if (!updatedUserLogin) {
            res.status(404).json({message: "User Login not found"});
        }
        res.status(200).json({message: "User Login updated successfully", data: updatedUserLogin})
    } catch (error) {
        
    }
}

//DELETE USER LOGIN

export const deleteUserLogin = async (req,res) => {
    try {
        const id = req.params.id;
        const deletedUserLogin = await userLoginData.findByIdAndDelete(id);
        if (!deletedUserLoginUserLogin){
            res.status(404).json({message: "user login data not found"})
        }
       
        res.status(200).json({message: "User Login deleted successfully", data: deletedUserLogin})
    } catch (error) {
        
    }
}