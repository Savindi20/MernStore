import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs";

const createUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    // console.log(username);
    // console.log(email);
    // console.log(password);

    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Please fill in all fields");
    }

    const userExists = await User.findOne({ email});
    if (userExists) {
        res.status(400).send("User already exists");
    }

    const newUser = new User({username,email,password});

    try {
        await newUser.save();
        res.status(201).json({
            _id:newUser._id,
            username:newUser.username,
            email:newUser.email,
            isAdmin:newUser.isAdmin,
        });
    } catch (error) {
        res.status(400)
        throw new Error("Invalid user data");
    }
});


export {createUser};