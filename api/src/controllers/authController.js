import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {

    try {
        const { username, email, password } = req.body;
        if (
            !username || !email || !password || username === "" || email === "" || password === ""
        ) {
            next(errorHandler(400, "All fields are required."));
        };

        const hashedPassword = bcryptjs.hashSync(password, 10);


        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(200).json({ message: "User Signup successfully." });
    } catch (error) {
        next(error)
    };

};