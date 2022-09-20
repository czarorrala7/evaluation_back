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
exports.PersonaController = void 0;
const common_1 = require("@nestjs/common");
const controller_commons_1 = require("../../commons/controller.commons");
const service_commons_1 = require("../../commons/service.commons");
const persons_service_1 = require("../services/persons.service");
let PersonaController = class PersonaController extends controller_commons_1.BaseController {
    constructor(personaService) {
        super();
        this.personaService = personaService;
    }
    getService() {
        return this.personaService;
    }
};
PersonaController = __decorate([
    common_1.Controller('api/persona'),
    __metadata("design:paramtypes", [persons_service_1.PersonaService])
], PersonaController);
exports.PersonaController = PersonaController;
//# sourceMappingURL=persona.controller.js.map