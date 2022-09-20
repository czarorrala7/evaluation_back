import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.services";

@Controller('api/access')
export class UsuarioController extends BaseController<Usuario> {

    constructor(private readonly UsuarioService: UsuarioService) {
        super();
    }

    getService(): BaseService<Usuario> {
        return this.UsuarioService;
    }

}