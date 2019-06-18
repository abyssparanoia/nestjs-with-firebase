import { MigrationInterface, QueryRunner } from 'typeorm'

export class addAvatarUrl1560835282975 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE `user` ADD `avatar_url` varchar(255) NOT NULL')
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE `user` DROP COLUMN `avatar_url`')
  }
}
