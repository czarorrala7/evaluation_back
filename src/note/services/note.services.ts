import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Note } from "../entities/note.entity";

 
export class NoteService extends BaseService<Note> {
    constructor(@InjectRepository(Note) private noteRepo : Repository<Note>) {
        super();
    }
    
    getRepository(): Repository<Note> {
        return this.noteRepo;
    }
}