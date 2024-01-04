import { IsString, IsNumber } from "class-validator";

export class UpdateSalesStatDto{

    @IsNumber()
    t_id: number;
    
    @IsString()
    t_name: string;

    @IsNumber()
    sales: number;
}