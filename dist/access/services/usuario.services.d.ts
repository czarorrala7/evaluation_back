import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entity";
export declare class UsuarioService extends BaseService<Usuario> {
    private usuarioRepo;
    constructor(usuarioRepo: Repository<Usuario>);
    getRepository(): Repository<Usuario>;
}
