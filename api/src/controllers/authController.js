import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {

    try {
        const { username, email, password } = req.body;
        if (
            !username || !email || !password || username === "" || email === "" || password === ""
        ) {
            res.status(400).json({ message: "All fields are required." });
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
        res.status(500).json({
            message: error.message
        });
    };

};