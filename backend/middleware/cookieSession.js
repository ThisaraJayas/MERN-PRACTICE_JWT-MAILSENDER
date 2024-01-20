import Jwt  from "jsonwebtoken";

const secret = 'dh43bjfnsnjsn839nmncxr3';

const setTokenCookie = (res, userId, username) => {
    const token = Jwt.sign({ id: userId, username }, process.env.TOKEN_KEY, {
        expiresIn:"1d",
    });
    res.cookie("token", token, { 
        httpOnly: true, 
        maxAge: 86400000,
        secure: process.env.NODE_ENV ==="production", 
    });
};

export default setTokenCookie