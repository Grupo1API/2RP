import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
export type Status = 'ativo' | 'inativo';

@Entity({ name: "projeto" })
export class Projeto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80, nullable: false })
  nome: string;

  @Column({ length: 20, nullable: false, unique: true })
  numero: string;

  @Column({
    type: "enum",
    enum: ['ativo', 'inativo'],
    default: 'ativo',
    nullable: false,
  })
  status: string;
}
