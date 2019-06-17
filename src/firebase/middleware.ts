import firebase from './initilize'
import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common'
import { HttpException } from '@nestjs/common/exceptions/http.exception'
import { Request, Response } from 'express'

@Injectable()
export class FirebaseAuthMiddleware implements NestMiddleware {
  async use(req: Request, _: Response, next: Function) {
    const { authorization } = req.headers
    // Bearer ezawagawg.....
    const token = authorization.slice(7)

    const user = await firebase
      .auth()
      .verifyIdToken(token)
      .catch(err => {
        throw new HttpException({ message: 'Input data validation failed', err }, HttpStatus.UNAUTHORIZED)
      })

    req.firebaseUser = user
    next()
  }
}
