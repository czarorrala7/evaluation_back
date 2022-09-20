import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Note } from "../entities/note.entity";
import { NoteService } from "../services/note.services";

@Controller('api/note')
export class NoteController extends BaseController<Note> {

    constructor(private readonly NoteService: NoteService) {
        super();
    }

    getService(): BaseService<Note> {
        return this.NoteService;
    }

}