import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Note } from "../entities/persona.entity";
export declare class PersonaService extends BaseService<Note> {
    private personaRepo;
    constructor(personaRepo: Repository<Note>);
    getRepository(): Repository<Note>;
}
