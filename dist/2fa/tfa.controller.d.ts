import { Request, Response } from 'express';
import { TfaService } from './tfa.service';
export declare class TfaController {
    private readonly tfaService;
    constructor(tfaService: TfaService);
    showTfaPage(req: Request, res: Response): Promise<void>;
    verifyTfa(req: Request, res: Response, token: string): Promise<void>;
}
