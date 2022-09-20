"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const controller_commons_1 = require("../../commons/controller.commons");
const service_commons_1 = require("../../commons/service.commons");
const usuario_services_1 = require("../services/usuario.services");
let UsuarioController = class UsuarioController extends controller_commons_1.BaseController {
    constructor(UsuarioService) {
        super();
        this.UsuarioService = UsuarioService;
    }
    getService() {
        return this.UsuarioService;
    }
};
UsuarioController = __decorate([
    common_1.Controller('api/access'),
    __metadata("design:paramtypes", [usuario_services_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map