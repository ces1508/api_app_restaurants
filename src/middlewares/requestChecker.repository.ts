import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export default function requestChecker (req: Request, res: Response, next: NextFunction): Response | void {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    })
  }
  next()
}
