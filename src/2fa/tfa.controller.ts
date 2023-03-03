import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { SessionData } from './session.interface';
import * as speakeasy from 'speakeasy';

import { TfaService } from './tfa.service';
import { RequestWithSession } from './request-with-session.interface';



@Controller('tfa')
export class TfaController {
  constructor(private readonly tfaService: TfaService) {}

  @Get()
  async showTfaPage(@Req() req: Request, @Res() res: Response) {
    const secret = await this.tfaService.generateSecret();
    const qrCodeUrl = await this.tfaService.generateQrCodeUrl(secret);

    req.session.tfaSecret = secret;

    return res.render('tfa', {
      qrCodeUrl,
      app: process.env.TFA_ISSUER,
    });
  }

  @Get('verify')
  async verifyTfa(
    @Req() req: Request,
    @Res() res: Response,
    @Query('token') token: string,
  ) {
    const secret = req.session.tfaSecret;

    const verified = speakeasy.totp.verify({
      secret,
      encoding: 'base32',
      token,
    });

    if (verified) {
      // Se o código estiver correto, você pode marcar o usuário como autenticado aqui
      return res.redirect('/dashboard');
    }

    return res.redirect('/tfa?error=Invalid%20verification%20code');
  }
}
