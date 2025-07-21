import jwt from "jsonwebtoken";

export default (req, res, next) => {
    const authHeader = req.headers['authorization'];
    // Get the second parameter from the header
    const token = authHeader && authHeader.split(" ")[1];

    try {
        // checks if the token is valid
        const verifiedToken = jwt.verify(token, process.env.JWT_TOKEN);
        req.userId = verifiedToken.userId;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};