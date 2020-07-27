/* eslint-disable @typescript-eslint/promise-function-async */
import jwt, { SignOptions, Secret } from 'jsonwebtoken'

interface decodedToken {
  iat?: number
  audience?: string
  issuer?: string
  jwtid?: string
  notBefore?: string
  jti: string
  expiredIn: number
}

class HandleJWT {
  private readonly secretOrPrivateKey: Secret
  private readonly secretOrPublicKey: Secret
  private readonly options: SignOptions

  constructor (secretOrPrivateKey: Secret, secretOrPublicKey: Secret, options: SignOptions) {
    this.secretOrPrivateKey = secretOrPrivateKey
    this.secretOrPublicKey = secretOrPublicKey
    this.options = options
  }

  generate (payload: Object, jwtOptions: SignOptions) {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, this.secretOrPrivateKey, { ...jwtOptions, ...this.options }, (err, token) => {
        if (err !== null) return reject(err.message)
        resolve(token)
      })
    })
  }

  refreshToken (token: string, refreshOption: SignOptions) {
    const payload = jwt.verify(token, this.secretOrPublicKey, refreshOption)
    delete (payload as decodedToken).iat
    delete (payload as decodedToken).jwtid
    delete (payload as decodedToken).expiredIn
    delete (payload as decodedToken).jti
    const jwtSignOptions = { ...this.options, ...refreshOption }
    return this.generate(payload, jwtSignOptions)
  }
}

export default HandleJWT
