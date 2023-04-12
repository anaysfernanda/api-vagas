import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableVaga1681260072249 implements MigrationInterface {
    name = 'CreateTableVaga1681260072249'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vagas"."vaga" ("id" character varying NOT NULL, "descricao" character varying NOT NULL, "empresa" character varying NOT NULL, "dt_limite" TIMESTAMP NOT NULL, "ind_ativo" boolean NOT NULL, "max_candidatos" integer, "id_usuario" character varying, CONSTRAINT "PK_8fc4878a1eec234441d6696c3cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vagas"."vaga" ADD CONSTRAINT "FK_619f0622a159d723eb5c32b4243" FOREIGN KEY ("id_usuario") REFERENCES "vagas"."usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vagas"."vaga" DROP CONSTRAINT "FK_619f0622a159d723eb5c32b4243"`);
        await queryRunner.query(`DROP TABLE "vagas"."vaga"`);
    }

}
