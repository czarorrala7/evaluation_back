"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const persona_controller_1 = require("./controllers/persona.controller");
const persona_entity_1 = require("./entities/persona.entity");
const persons_service_1 = require("./services/persons.service");
let PersonaModule = class PersonaModule {
};
PersonaModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([persona_entity_1.Note])],
        providers: [persons_service_1.PersonaService],
        controllers: [persona_controller_1.PersonaController]
    })
], PersonaModule);
exports.PersonaModule = PersonaModule;
//# sourceMappingURL=persona.module.js.map