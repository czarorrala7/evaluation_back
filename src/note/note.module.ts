import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteController } from './controllers/note.controller';
import { Note } from './entities/note.entity';
import { NoteService } from './services/note.services';

@Module({
    imports : [TypeOrmModule.forFeature([Note])],
    providers : [NoteService],
    controllers : [NoteController]
})
export class NoteModule {

}

