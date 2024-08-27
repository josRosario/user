import jwt from 'jsonwebtoken';

const JWT_SECRET = ' "thllos@3kdkdkd8dd"'

export const authPage = () => {
    return (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1];

        if (!token) {
            return res.status(401).json("Token is missing");
        }
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json("Invalid token");
            }
            req.user = decoded; 
            next();
        });
    };
};
