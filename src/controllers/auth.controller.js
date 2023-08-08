import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
    
        // hashing the password
        const passwordHash = await bcrypt.hash(password, 10);
    
        // creating the user
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });
    
        // saving the user in the database
        const userSaved = await newUser.save();
    
        jwt.sign(
            {
                id: userSaved._id,
            },
            "secret123",
            {
                expiresIn: "1d",
            },
            (err, token) => {
                if (err) console.log(err);
                res.cookie('token', token);
                res.json({
                    message: "User has been created successfully :)",
                });
            }
        );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const login = (req, res) => res.send('login');