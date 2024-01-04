import { IsString, IsNumber } from "class-validator";

export class CreateSalesStatDto{

    @IsNumber()
    t_id: number;
    
    @IsString()
    t_name: string;

    @IsNumber()
    sales: number;
}