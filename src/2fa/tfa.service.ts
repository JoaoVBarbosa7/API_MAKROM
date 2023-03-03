import * as speakeasy from 'speakeasy';
import * as QRCode from 'qrcode';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TfaService {
  async generateSecret(): Promise<string> {
    const secret = speakeasy.generateSecret({
      length: 20,
      name: process.env.TFA_ISSUER,
    });
    return secret.base32;
  }

  async generateQrCodeUrl(secret: string): Promise<string> {
    const url = speakeasy.otpauthURL({
      secret,
      label: process.env.TFA_ISSUER,
      algorithm: 'sha1',
    });
    return QRCode.toDataURL(url);
  }
}
