import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
export type Status = 'ativo'|'inativo'

@Entity({name:"clientes"})
export class Cliente {
    @PrimaryGeneratedColumn ({})
    idcliente: number 

    @Column({length: 80, nullable: false})
    nome: string

    @Column({length:20,nullable: false,unique:true})
    cnpj: string

    @Column({type:'enum',enum:['ativo','inativo'],default:'ativo',nullable: false})
    status: string
}