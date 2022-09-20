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
exports.NoteController = void 0;
const common_1 = require("@nestjs/common");
const controller_commons_1 = require("../../commons/controller.commons");
const service_commons_1 = require("../../commons/service.commons");
const note_services_1 = require("../services/note.services");
let NoteController = class NoteController extends controller_commons_1.BaseController {
    constructor(NoteService) {
        super();
        this.NoteService = NoteService;
    }
    getService() {
        return this.NoteService;
    }
};
NoteController = __decorate([
    common_1.Controller('api/note'),
    __metadata("design:paramtypes", [note_services_1.NoteService])
], NoteController);
exports.NoteController = NoteController;
//# sourceMappingURL=note.controller.js.map