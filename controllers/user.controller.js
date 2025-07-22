import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

// POST /register
export const registerUser = async (req, res) => {
    // get email and password
    const { email, password } = req.body;

    // encrypts the password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // create a user
    const user = new userModel({ email, password: encryptedPassword });

    // save & return user
    await user.save();
    res.status(201).json({ message: "User Created Successfully" });
};

// POST /login
export const userLogin = async (req, res) => {
    const { email, password } = req.body;

    // find the user from the db
    const user = await userModel.findOne({ email });
    if (!user) return res.status(401).json({ message: "User not found" });

    // matches the password
    const pass = await bcrypt.compare(password, user.password);
    if (!pass) return res.status(401).json({ message: "Invalid credentials" });

    // generates the token and send to user
    const jwtToken = jwt.sign({ userId: user._id }, process.env.JWT_Token, { expiresIn: "30m" });
    res.json({ jwtToken });
};