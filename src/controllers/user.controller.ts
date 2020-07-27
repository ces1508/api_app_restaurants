import { Response, Request, NextFunction } from 'express'
import * as uuid from 'uuid'
import { UserRepository } from '../repositories/'
import { IUser } from '../models/user.model'
import { JWT } from '../lib'

class UserController {
  async create (req: Request, res: Response, next: NextFunction): Promise<void> {
    const body = req.body
    const newUser = await UserRepository.create(body)
    if (newUser.error === true) return next(newUser)
    let user = (newUser.data as IUser)
    user = user.toJSON()
    delete user.password
    delete user.passwordResetToken
    delete user.passwordResetTokenExpired
    // console.log(userData)
    try {
      const jwtToken = await JWT.generate(user, { jwtid: uuid.v4(), subject: 'user', notBefore: '2s' })
      res.status(201).json({
        user,
        token: jwtToken,
        created: true
      })
    } catch (e) {
      const error = {
        message: e.message,
        status: 500
      }
      next(error)
    }
  }

  async index (req: Request, res: Response): Promise<void> {
    // const { page: number = 1 } = req.params

    const users = await UserRepository.find({ })
    res.status(200).json({ users })
  }
}

export default new UserController()
