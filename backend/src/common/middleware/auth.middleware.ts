import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'access_secret';


@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const token = req.cookies?.access_token;
        console.log('aut middleware:', token)
        if (!token) throw new UnauthorizedException('No token provided');

        try {
            const decoded = jwt.verify(token, ACCESS_SECRET);

            req['user'] = decoded;
            next();
        } catch (err) {
            throw new UnauthorizedException('Invalid or expired token');
        }
    }
}
