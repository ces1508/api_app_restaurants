import { Response, Request } from 'express'
import { UserRepository } from '../repositories/'


class UserController {

  async create (req: Request, res: Response) {
    const userData = req.body
    const newUser = await UserRepository.create(userData)
    res.status(201).json({
      newUser,
      created: true
    })
  }

  async index (req: Request, res: Response) {
    // const { page: number = 1 } = req.params

    const users = await UserRepository.find({ })
    res.status(200).json({ users })

  }

}

export default new UserController ()