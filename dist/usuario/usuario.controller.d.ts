import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
export declare class UsuarioController {
    private readonly prisma;
    private authService;
    constructor(prisma: PrismaService, authService: AuthService);
    findAll(): Promise<any>;
    create(data: {
        email: string;
        senha: string;
    }): Promise<any>;
    update(id: string, data: {
        senha: string;
        email: string;
    }): Promise<any>;
    delete(id: string): Promise<any>;
    login(req: any): Promise<{
        access_token: string;
    }>;
}
