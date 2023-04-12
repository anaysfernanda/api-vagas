import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { UsuarioEntity } from "./usuario.entity";

@Entity("vaga")
export class VagaEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  descricao: string;

  @Column()
  empresa: string;

  @Column({
    name: "dt_limite",
  })
  dtLimite: Date;

  @Column({
    name: "ind_ativo",
  })
  indAtivo: boolean;

  @Column({
    name: "max_candidatos",
    nullable: true,
    type: "int4",
  })
  maxCandidatos: number;

  @ManyToOne(() => UsuarioEntity, {
    onDelete: "CASCADE",
  })
  @JoinColumn({
    name: "id_usuario",
  })
  usuario: UsuarioEntity;
}
