import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class createFriendsAndFriendRequestTables1653311853453 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "friends",
      columns: [
        {
          name: "id",
          type: "bigint",
          isPrimary: true
        },
        {
          name: "user_id",
          type: "bigint",
          isNullable: false
        },
        {
          name: "friend_id",
          type: "bigint",
          isNullable: false,
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()",
        },
        {
          name: "updated_at",
          type: "timestamp",
          default: "now()",
        }
      ]
    }))

    await queryRunner.createForeignKeys("friends", [
      new TableForeignKey({
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "user",
        onDelete: "CASCADE"
      }),
      new TableForeignKey({
        columnNames: ["friend_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "user",
        onDelete: "CASCADE"
      })
    ])



    await queryRunner.createTable(new Table({
      name: "friend_requests",
      columns: [
        {
          name: "id",
          type: "bigint",
          isPrimary: true
        },
        {
          name: "send_to",
          type: "bigint",
          isNullable: false
        },
        {
          name: "send_by",
          type: "bigint",
          isNullable: false,
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()",
        },
        {
          name: "updated_at",
          type: "timestamp",
          default: "now()",
        }
      ]
    }))

    await queryRunner.createForeignKeys("friend_requests", [
      new TableForeignKey({
        columnNames: ["send_to"],
        referencedColumnNames: ["id"],
        referencedTableName: "user",
        onDelete: "CASCADE"
      }),
      new TableForeignKey({
        columnNames: ["send_by"],
        referencedColumnNames: ["id"],
        referencedTableName: "user",
        onDelete: "CASCADE"
      })
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const friends = await queryRunner.getTable("friends")
    const user_id = friends.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("user_id") !== -1,
    )
    const friend_id = friends.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("friend_id") !== -1,
    )

    await queryRunner.dropForeignKey("friends", user_id)
    await queryRunner.dropForeignKey("friends", friend_id)
    await queryRunner.dropColumn("friends", "questionId")
    await queryRunner.dropTable("friends")
    await queryRunner.dropIndex("friends", "IDX_QUESTION_NAME")
    await queryRunner.dropTable("friends")


    const table = await queryRunner.getTable("friend_requests")
    const send_by = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("send_by") !== -1,
    )
    const send_to = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("send_to") !== -1,
    )

    await queryRunner.dropForeignKey("friend_requests", user_id)
    await queryRunner.dropForeignKey("friend_requests", friend_id)
    await queryRunner.dropColumn("friend_requests", "questionId")
    await queryRunner.dropTable("friend_requests")
    await queryRunner.dropIndex("friend_requests", "IDX_QUESTION_NAME")
    await queryRunner.dropTable("friend_requests")
  }

}
