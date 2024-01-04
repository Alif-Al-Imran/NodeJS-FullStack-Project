import { IsString, IsNumber } from "class-validator";

export class CreateRevenueDto{

    @IsString()
    month: string;

    @IsNumber()
    year: number;

    @IsNumber()
    invoices: number;
    
    @IsString()
    orders: number;

    @IsNumber()
    m_revenue: number;

    @IsNumber()
    y_revenue: number;
}