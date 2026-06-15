// import jwt from "jsonwebtoken";

// const authMiddleware = async (req,res,next) => {
//     const {token} = req.headers;
//     if (!token) {
//         return res.json({success:false,message:"Not Authorized Login Again"})
//     }
//     try{
//         const token_decode = jwt.verify(token,process.env.JWT_SECRET);
//         req.body.userId = token_decode.id;
//         next();
//     }catch (error){
//         console.log(error);
//         res.json({success:false,message:"Error"})
        
//     }

// }

// export default authMiddleware;
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;

    console.log("Received Token:", token);
    console.log("JWT Secret:", process.env.JWT_SECRET);

    if (!token) {
        return res.json({
            success: false,
            message: "Not Authorized Login Again"
        });
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        console.log("Decoded Token:", token_decode);

        // Create body if it doesn't exist
        if (!req.body) {
            req.body = {};
        }

        req.body.userId = token_decode.id;

        next();

    } catch (error) {
        console.log("JWT ERROR:", error.message);

        return res.json({
            success: false,
            message: error.message
        });
    }
};

export default authMiddleware;