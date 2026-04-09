import {  type Request, type Response, type NextFunction } from "express";
import jwt from 'jsonwebtoken'

interface AuthRequest extends Request{
    user?:{
        user_name: string;
        user_role: string;
    }
}

export async function authenticateUser(req: AuthRequest, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization;

    if(!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) { 
        return res.status(401).json({message: "Access Denied. No token provided"})
    }
    const token = authorizationHeader.split(' ')[1];
    try {
        const decodedToken = jwt.verify(token!, process.env.JSON_WEB_TOKEN!) as { user_name: string, user_role: string }
        req.user = decodedToken
        next();
    } catch (error) { 
        return res.status(500).json({message: "Inavalid Request"})
    }

}

export async function authorizationMiddleware( user_role: string ){
    return( req: AuthRequest, res: Response, next: NextFunction ) => {
        if(!req.user || !user_role.includes(req.user.user_role)) return res.status(403).json({message: " Access Denied "})
        next()
        }
}