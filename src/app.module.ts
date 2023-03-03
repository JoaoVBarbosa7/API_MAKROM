import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssinaturaModule } from './assinatura/assinatura.module';
import { AuthModule } from './auth/auth.module';
import { ClienteModule } from './cliente/cliente.module';
import { CobrancaModule } from './cobranca/cobranca.module';
import { PagamentoModule } from './linkdepagamento/pagamento.module';
import { PrismaService } from './prisma/prisma.service';
import { AsaasService } from './services/asaas.service';
import { UsuarioModule } from './usuario/usuario.module';
import { TfaController } from './2fa/tfa.controller';
import { TfaService } from './2fa/tfa.service';
import { SessionModule } from 'nestjs-session';

@Module({
  imports: [
    AuthModule,
    AssinaturaModule,
    ClienteModule,
    CobrancaModule,
    ConfigModule,
    PagamentoModule,
    UsuarioModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SessionModule.forRoot({
      session: {
        secret: 'my-secret',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
}})
  ],
  controllers: [AppController, TfaController],
  providers: [AppService, PrismaService, AsaasService, TfaService],
  exports: [PrismaService],
})
export class AppModule {}
