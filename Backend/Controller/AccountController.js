import Account from "../Model/AccountModel.js";

export const createAccount = async (req,res) => {
    const {username,email,password} = req.body;

    try {
        const existingUser = await Account.findOne({username});
        if(existingUser){
            return res.status(400).json({message: "User already exists"});
        }
        const newUser = new Account({
            username,
            email,
            password
        })
        
        await newUser.save();
        res.status(201).json({message: "Account created successfully"});


    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
}

export const loginUser = async (req,res) => {
    const {username,password} = req.body;

    try {
        const user = await Account.findOne({username});
        if (!user || user.password !==password) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }
       
        return res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}