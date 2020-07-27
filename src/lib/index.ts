import { SignOptions } from 'jsonwebtoken'
import HandleJWT from './jwt'

const SECRET_JWT_KEY = process.env.JWT_SECRET

const SIGNINJWTOPTIONS: SignOptions = {
  expiresIn: '5m',
  algorithm: 'HS256',
  noTimestamp: false,
  notBefore: '2s'

}
export const JWT = new HandleJWT(SECRET_JWT_KEY, SECRET_JWT_KEY, SIGNINJWTOPTIONS)
