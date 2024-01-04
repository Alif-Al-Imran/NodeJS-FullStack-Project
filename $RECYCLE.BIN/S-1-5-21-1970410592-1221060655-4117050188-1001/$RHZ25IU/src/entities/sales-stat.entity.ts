import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity("salesstat")
export class SalesStat{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable:false})
    t_id: number;

    @Column({nullable:false})
    t_name: string;

    @Column({nullable:true})
    sales: number;


}