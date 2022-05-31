
import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm"



export class post1653389637996 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({  name: "posts",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true
          },
          {
            name: "Created_BY",
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
  
    await queryRunner.createForeignKeys("post", [
      new TableForeignKey({
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "user",
        onDelete: "CASCADE"
      }),
      new TableForeignKey({
        columnNames: ["post_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "user",
        onDelete: "CASCADE"
      })
    ])
  }
 
    public async down(queryRunner: QueryRunner): Promise<void> {
      const posts = await queryRunner.getTable("posts")
      const user_id = posts.foreignKeys.find(
        (fk) => fk.columnNames.indexOf("user_id") !== -1,
      )
      const post_id = posts.foreignKeys.find(
        (fk) => fk.columnNames.indexOf("friend_id") !== -1,
      )  
      
      await queryRunner.dropForeignKey("posts", user_id)
      await queryRunner.dropForeignKey("posts", post_id)
      await queryRunner.dropColumn("posts", "questionId")
      await queryRunner.dropTable("posts")
      await queryRunner.dropIndex("posts", "IDX_QUESTION_NAME")
      await queryRunner.dropTable("posts")


}
}

