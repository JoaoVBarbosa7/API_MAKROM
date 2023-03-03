"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TfaService = void 0;
const speakeasy = require("speakeasy");
const QRCode = require("qrcode");
const common_1 = require("@nestjs/common");
let TfaService = class TfaService {
    async generateSecret() {
        const secret = speakeasy.generateSecret({
            length: 20,
            name: process.env.TFA_ISSUER,
        });
        return secret.base32;
    }
    async generateQrCodeUrl(secret) {
        const url = speakeasy.otpauthURL({
            secret,
            label: process.env.TFA_ISSUER,
            algorithm: 'sha1',
        });
        return QRCode.toDataURL(url);
    }
};
TfaService = __decorate([
    (0, common_1.Injectable)()
], TfaService);
exports.TfaService = TfaService;
//# sourceMappingURL=tfa.service.js.map