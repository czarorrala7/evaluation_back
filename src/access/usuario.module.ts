import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './controllers/usuario.controller';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './services/usuario.services';

@Module({
    imports : [TypeOrmModule.forFeature([Usuario])],
    providers : [UsuarioService],
    controllers : [UsuarioController]
})
export class UsuarioModule {

}

