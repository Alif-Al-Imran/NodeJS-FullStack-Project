import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity("ratings")
export class Ratings{

    @PrimaryGeneratedColumn()
    r_id: number;

    @Column({nullable:true})
    u_id: number;

    @Column({nullable:true})
    u_name: string;

    @Column({nullable:true})
    rating: number;

    @Column({nullable:true})
    review: string;

    @Column({nullable:true})
    t_id: number;


}