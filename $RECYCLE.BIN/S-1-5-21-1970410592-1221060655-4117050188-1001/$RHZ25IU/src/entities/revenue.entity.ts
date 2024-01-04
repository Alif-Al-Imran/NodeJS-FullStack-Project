import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity("revenue")
export class Revenue{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable:false})
    month: string;

    @Column({nullable:false})
    year: number;

    @Column({nullable:true})
    invoices: number;

    @Column({nullable:true})
    orders: number;

    @Column({nullable:true})
    m_revenue: number;

    @Column({nullable:true})
    y_revenue: number;


}