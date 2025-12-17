import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;

export const generateToken = (user) => {
    return jwt.sign(user, secretKey, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
    return jwt.verify(token, secretKey);
};