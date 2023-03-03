export declare class TfaService {
    generateSecret(): Promise<string>;
    generateQrCodeUrl(secret: string): Promise<string>;
}
