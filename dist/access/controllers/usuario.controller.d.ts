import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.services";
export declare class UsuarioController extends BaseController<Usuario> {
    private readonly UsuarioService;
    constructor(UsuarioService: UsuarioService);
    getService(): BaseService<Usuario>;
}
