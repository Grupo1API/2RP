import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";
export type Status = 'ativo' | 'inativo';

@Entity({name:"hora_extra"})
export class HoraExtra {
    @PrimaryGeneratedColumn ()
    matricula: number 

    @Column({length: 80, nullable: false})
    nome_completo: string

    @Column({length:20,nullable: false,unique:true})
    entrada1: Date

    @Column({length:20,nullable: false,unique:true})
    saida1: Date

    @Column({length:20,nullable: false,unique:true})
    entrada2: Date

    @Column({length:20,nullable: false,unique:true})
    saida2: Date

    @Column({length: 80, nullable: false})
    nome_gestor: string

    @Column({length: 200, nullable: false})
    justificativa: string
}
