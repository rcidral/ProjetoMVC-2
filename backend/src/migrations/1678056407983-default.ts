import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678056407983 implements MigrationInterface {
    name = 'default1678056407983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cidade\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rota\` (\`id\` int NOT NULL AUTO_INCREMENT, \`data\` datetime NOT NULL, \`cidade_origem_id\` int NULL, \`cidade_destino_id\` int NULL, \`caminhao_id\` int NULL, UNIQUE INDEX \`REL_d82e46e3c8def58807a7b40d04\` (\`cidade_origem_id\`), UNIQUE INDEX \`REL_3bf92306332afcb4432f766940\` (\`cidade_destino_id\`), UNIQUE INDEX \`REL_a540f207a707e7ace98b5f85d0\` (\`caminhao_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`caminhao\` (\`id\` int NOT NULL AUTO_INCREMENT, \`placa\` varchar(255) NOT NULL, \`motorista\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`rota\` ADD CONSTRAINT \`FK_d82e46e3c8def58807a7b40d049\` FOREIGN KEY (\`cidade_origem_id\`) REFERENCES \`cidade\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rota\` ADD CONSTRAINT \`FK_3bf92306332afcb4432f766940e\` FOREIGN KEY (\`cidade_destino_id\`) REFERENCES \`cidade\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rota\` ADD CONSTRAINT \`FK_a540f207a707e7ace98b5f85d00\` FOREIGN KEY (\`caminhao_id\`) REFERENCES \`caminhao\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rota\` DROP FOREIGN KEY \`FK_a540f207a707e7ace98b5f85d00\``);
        await queryRunner.query(`ALTER TABLE \`rota\` DROP FOREIGN KEY \`FK_3bf92306332afcb4432f766940e\``);
        await queryRunner.query(`ALTER TABLE \`rota\` DROP FOREIGN KEY \`FK_d82e46e3c8def58807a7b40d049\``);
        await queryRunner.query(`DROP TABLE \`caminhao\``);
        await queryRunner.query(`DROP INDEX \`REL_a540f207a707e7ace98b5f85d0\` ON \`rota\``);
        await queryRunner.query(`DROP INDEX \`REL_3bf92306332afcb4432f766940\` ON \`rota\``);
        await queryRunner.query(`DROP INDEX \`REL_d82e46e3c8def58807a7b40d04\` ON \`rota\``);
        await queryRunner.query(`DROP TABLE \`rota\``);
        await queryRunner.query(`DROP TABLE \`cidade\``);
    }

}
