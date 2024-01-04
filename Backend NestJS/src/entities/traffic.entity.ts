import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity("traffic")
export class Traffic{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable:false})
    month: string;

    @Column({nullable:true})
    page_views: number;

    @Column({nullable:true})
    time_on_page: number;

    @Column({nullable:true})
    sessions: number;


}