import jwt from 'jsonwebtoken';
import { JwtPayload } from '../../common/types/types';

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'access_secret';
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'refresh_secret';

export function signAccessToken(payload:JwtPayload){
    return jwt.sign(payload, ACCESS_SECRET, {
    expiresIn: '15d',
    })
}

export function signRefreshToken(payload: string) {
  return jwt.sign({payload}, REFRESH_SECRET, {
    expiresIn: '15d',
  });
}

