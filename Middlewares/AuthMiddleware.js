import jwt from 'jsonwebtoken'

const RequireSignIn = async (req,res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ success: false, message: 'Authorization token missing' });
        }
        
        const decode = await jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        next()
    } catch (error) {
        console.log(error)
    }
}






export {RequireSignIn}
