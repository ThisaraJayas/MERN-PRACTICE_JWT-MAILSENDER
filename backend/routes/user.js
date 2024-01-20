import express  from "express";
import User from "../modules/user.js";
import setTokenCookie from "../middleware/cookieSession.js";
import verifyTokenMiddleware from "../middleware/verifyToken.js";



const router = express.Router()

router.post('/register', async(req,res)=>{
    const {username, email, password} = req.body
    const newUser = new User({username,email,password})
    try{
        await newUser.save()
        res.status(200).json({message:"Successs"})
    }catch(error){
        res.status(500).json({message:"Invalid"})
    }
})

router.post('/login',async(req,res)=>{
    const {email, password} = req.body

    try{
        const user = await User.findOne({email})

        if(user.password ===password){
            setTokenCookie(res, user._id, user.email);
            res.status(200).json({userId: user._id, email: user.email})
        }else{
            res.status(500).json({message: "Invalid Password"})
        }
        
        
    }catch(error){
        res.status(500).json({message:"User Not Found"})
    }
})

router.post('/logout', (req, res) => {
    res.cookie('token', '', {
         expires: new Date(0),
          httpOnly: true 
    });
    res.status(200).json({ message: "Logout Successful" });
});


export default router