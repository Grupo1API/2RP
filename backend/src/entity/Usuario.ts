import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate} from "typeorm";
import * as bcrypt from "bcrypt";

export type Perfil = 'admin' | 'gestor' | 'colaborador'

@Entity({ name: "usuarios" })
export class Usuario {
    @PrimaryGeneratedColumn()
    idusuario: number

    @Column({ length: 50, nullable: false })
    email: string

    @Column({ nullable: false, select: false })
    senha: string

    @Column({type:'enum', enum:['admin','gestor','colaborador'], default:'colaborador', nullable:false})
    perfil: Perfil

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(): void {
        if (this.senha) {
            this.senha = bcrypt.hashSync(this.senha, bcrypt.genSaltSync(10))
        }
    }

    compare(senha: string): Promise<boolean> {
        return bcrypt.compare(senha, this.senha)
    }
}