import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class migrationName1653311137682 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns("user", [
      new TableColumn({
        name: "email",
        type: "varchar",
        isNullable: true
      }),
      new TableColumn({
        name: "password",
        type: "varchar",
        isNullable: true
      })
    ]
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns("user", ["email", "password"])
  }

}
