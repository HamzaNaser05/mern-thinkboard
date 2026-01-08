import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) =>{
    try{
        //It should have some unique key per user like user id or ip address
        const { success } = await ratelimit.limit ('my-limit-key');
        if(!success){
            return res.status(429).json({ message: 'Too many requests, please try again later.'});
        }
        next();
    } catch (error) {
        console.error('Rate limiter error:', error);
        // In case of an error with the rate limiter, allow the request to proceed
        next(error);
    }
}

export default rateLimiter;