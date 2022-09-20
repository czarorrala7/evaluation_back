import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Note } from "../entities/note.entity";
import { NoteService } from "../services/note.services";
export declare class NoteController extends BaseController<Note> {
    private readonly NoteService;
    constructor(NoteService: NoteService);
    getService(): BaseService<Note>;
}
