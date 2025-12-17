import { verifyToken } from "../utils/jwt.js";

export const authToken = (req, res, next) => {
        try {
            const header = req.headers.authorization;

            if(!header) {
                return res.status(401).json({ success: false, message: 'Authorization header missing' });
            }

            const token = header.split(' ')[1];
            if(!token) {
                return res.status(401).json({ success: false, message: 'Token missing' });
            }

            const payload = verifyToken(token);
            req.user = payload;
            next();
        } catch (error) {
            return res.status(error.statusCode ||401).json({ success: false, message: 'Invalid token' });
        }
};