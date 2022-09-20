import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Note } from "../entities/persona.entity";
import { PersonaService } from "../services/persons.service";
export declare class PersonaController extends BaseController<Note> {
    private readonly personaService;
    constructor(personaService: PersonaService);
    getService(): BaseService<Note>;
}
