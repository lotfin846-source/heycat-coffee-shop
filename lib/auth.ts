import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET || 'dev-secret'

export function signToken(payload: object) {
  return jwt.sign(payload, secret, { expiresIn: '8h' })
}

export function verifyToken(token: string) {
  return jwt.verify(token, secret) as { sub: string; role: string }
}
