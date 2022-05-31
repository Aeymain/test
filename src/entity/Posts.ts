import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from "typeorm"
import { Comment } from "../entity/Comments"
import { User } from "../entity/User" 


@Entity('Posts')
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column( {nullable:true})
    description: string;

    @Column({nullable:true})
    Postedby: number;

    @Column()
    viewCount: number;


 @ManyToOne(() => User, (user) => user.post, {onDelete: 'CASCADE'})
  @JoinColumn({name:"Postedby"})  
  user: User;

   @OneToMany (() => Comment, (comment) => comment.post, {onDelete: 'CASCADE'})
    comment: Comment 
    
}