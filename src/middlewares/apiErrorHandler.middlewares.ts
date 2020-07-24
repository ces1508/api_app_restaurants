import { Request, Response, NextFunction } from 'express'
import { ApiError } from '../types'

const apiErrorHandler = (err: ApiError, req: Request, res: Response, next: NextFunction): void => {
  res.status(err.status).json({ error: false, message: err.message, code: err.code })
  next(new Error(err.message))
}

export default apiErrorHandler
