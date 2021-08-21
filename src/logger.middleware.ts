import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

// Class based middleware
@Injectable()
export class MiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('💫 up in the class middleware ..................');
    next();
  }
}

// functional middleware
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
}
