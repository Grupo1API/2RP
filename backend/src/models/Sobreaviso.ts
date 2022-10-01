import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";
export type Status = 'ativo' | 'inativo';

@Entity({name:"sobreaviso"})
export class Sobreaviso {
    @PrimaryGeneratedColumn ()
    matricula: number 

    @Column({length: 80, nullable: false})
    nome_completo: string

    @Column({nullable: false})
    entrada1: Date

    @Column({nullable: false})
    saida1: Date

    @Column({nullable: false})
    entrada2: Date

    @Column({nullable: false})
    saida2: Date

    @Column({length: 80, nullable: false})
    nome_gestor: string

    @Column({length: 200, nullable: false})
    justificativa: string
}