import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    ) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() Req){
   }

   @Get('auth/google/callback')
   @UseGuards(AuthGuard('google'))
   googleAuthRedirect(@Req() Req){
    return this.appService.googleLogin(Req)
   }
  }