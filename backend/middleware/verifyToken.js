import Jwt from "jsonwebtoken";

const verifyTokenMiddleware = (req, res, next) => {
    const token = req.cookies['token'];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    Jwt.verify(token, process.env.TOKEN_KEY, {}, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        req.userData = decoded;
        next();
    });
    if (process.env.NODE_ENV === 'production') {
        res.cookie('token', token, { secure: true });
    }
};

export default verifyTokenMiddleware;