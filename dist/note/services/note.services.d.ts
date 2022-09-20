import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Note } from "../entities/note.entity";
export declare class NoteService extends BaseService<Note> {
    private noteRepo;
    constructor(noteRepo: Repository<Note>);
    getRepository(): Repository<Note>;
}
