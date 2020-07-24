import { Response, Request, NextFunction } from 'express'
import { UserRepository } from '../repositories/'

class UserController {
  async create (req: Request, res: Response, next: NextFunction): Promise<void> {
    const userData = req.body
    const newUser = await UserRepository.create(userData)
    if (newUser.error === true) return next(newUser)

    res.status(201).json({
      newUser,
      created: true
    })
  }

  async index (req: Request, res: Response): Promise<void> {
    // const { page: number = 1 } = req.params

    const users = await UserRepository.find({ })
    res.status(200).json({ users })
  }
}

export default new UserController()
