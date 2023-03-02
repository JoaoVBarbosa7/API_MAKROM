import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(Req) {
    if (!Req.user) {
      return 'No user from google'
    }
    return{
      message: 'User info from Google',
      user: Req.user
    }
  }
}
