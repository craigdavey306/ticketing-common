import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const token = process.env.JWT_KEY!;
    const payload = jwt.verify(req.session.jwt, token) as UserPayload;
    req.currentUser = payload;
  } catch (err) {}

  // Continue on to the next middleware.
  next();
};
