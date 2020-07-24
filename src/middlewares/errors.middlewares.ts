import { Request, Response, NextFunction } from 'express'

interface AppError extends Error {
  status: number | undefined
}

const appHandlerError = (err: AppError, req: Request, res: Response, next: NextFunction): void => {
  const httpStatus = err.status ?? 500
  const message = err.message ?? 'INTERNAL_SERVER'
  res
    .status(httpStatus)
    .json({
      error: 'trsue',
      status: httpStatus,
      message: message
    })
  next(err)
}

export default appHandlerError
