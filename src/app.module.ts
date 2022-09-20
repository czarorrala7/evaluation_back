import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './note/note.module';
import { CategoryModule } from './category/category.module';
import { UsuarioModule } from './access/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'mysql',
      host : 'localhost',
      port : 3306,
      username: 'root',
      password : '',
       database : 'notes',
       autoLoadEntities : true
    }),
    NoteModule,
    CategoryModule,
    UsuarioModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

