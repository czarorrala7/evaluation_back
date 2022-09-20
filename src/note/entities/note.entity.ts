import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Note {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    idcategory : number;

    @Column()
    title: string;

    @Column()
    description: string; 

    @Column()
    status: boolean;
}