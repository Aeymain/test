import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"
  //  import { User } from "./Users" 
  import { Post } from "../entity/Posts"
 

@Entity('comments')
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;


    /* @Column()
    Postid: number; */

    @Column()
    description: string;

    @Column()
    replyCount: number;

    @Column()
    Commentedby: Number;
    

    @Column()
    date: Date;


    @ManyToOne(() => Post, (post)=> post.comment, {onDelete: 'CASCADE'})
    @JoinColumn({name:"Commentedby"})  
    post: Post;

    /*
    @ManyToOne(() => Post, (post) => post.postlist)
    comments: Post;
  
    @OneToMany(() => Post, post => post.comments)
     postslist: Comment[]; */
  } 