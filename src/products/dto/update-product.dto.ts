import { IsString, IsNumber, IsOptional} from 'class-validator'

export class UpdateProductDto {

    @IsString()
    readonly name?: string;

    @IsString()
    @IsOptional()
    readonly description?: string;
    @IsNumber()
    readonly price?: number;
}
