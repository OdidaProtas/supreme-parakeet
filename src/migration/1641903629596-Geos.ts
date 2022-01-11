import {MigrationInterface, QueryRunner} from "typeorm";

export class Geos1641903629596 implements MigrationInterface {
    name = 'Geos1641903629596'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ticket" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying NOT NULL, "company" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "anydesk" character varying NOT NULL, "status" character varying NOT NULL, "subject" character varying NOT NULL, "body" character varying NOT NULL, CONSTRAINT "PK_d9a0835407701eb86f874474b7c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ticket"`);
    }

}
