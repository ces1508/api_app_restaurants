import * as express from 'express'
import { check } from 'express-validator'
import { requestChecker } from '../middlewares'
import { UserController } from '../controllers'

const router = express.Router()

router.get('/', UserController.index)

router.post('/',
  [
    check('email').isEmail(),
    check('password').isLength({ min: 6 })
  ], requestChecker, UserController.create)

export default router
