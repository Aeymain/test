import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany,JoinTable, JoinColumn, OneToMany} from "typeorm"
import { User } from "./User"

@Entity("friend_requests")
export class FriendRequest{

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  user_id: number

  @Column()
  send_to: number

  //user_id (from User table (one to many))
//request_user_id (from User Table (many to many))

@ManyToOne(() => User, (user) => user.friendrequest)
@JoinColumn({name:"user_id"})  
 user: User;
static user: any
/*

@ManyToMany(() => User, (users) => users.friendRequest, {
  cascade: true
})
@JoinTable()
user: User[]

*/
@OneToMany(() => User, (user) => user.friendrequest1)
@JoinColumn({name:"sent_to"})  
 Sendby_user: User;
 static Sendby_user: any

}
