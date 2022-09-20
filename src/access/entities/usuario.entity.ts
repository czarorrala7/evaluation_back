import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id : number; 
    
    @Column()
    name: string; 

    @Column()
    user: string; 

    @Column()
    password: string; 
}