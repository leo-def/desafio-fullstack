import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsIn, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { MentorPaginationParams, MentorPaginationParamsFilter, MentorPaginationParamsOrderBy } from "../../../mentor/_types/pagination/mentor-pagination-params";
import { MentorPaginationParamsFilterDTO } from "./mentor-pagination-params-filter.dto";
import { MentorPaginationParamsOrderByDTO } from "./mentor-pagination-params-order-by.dto";


export class MentorPaginationParamsDTO extends MentorPaginationParams {
  @ApiProperty({
    name: 'skip',
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  skip: number;


  @ApiProperty({
    name: 'take',
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  take: number;

  @ApiProperty({
    name: 'select',
    type: String,
    isArray: true,
    enum: ['id','name','cpf','email']
  })
  @IsString()
  @IsOptional()
  @IsIn(['id','name','cpf','email'])
  select?: Array<'id' | 'name' | 'cpf' | 'email'>;

  @ApiProperty({
    name: 'orderBy',
    type: MentorPaginationParamsOrderByDTO,
  })
  @IsObject()
  @IsOptional()
  orderBy?: MentorPaginationParamsOrderByDTO;

  @ApiProperty({
    name: 'filter',
    type: MentorPaginationParamsFilterDTO,
  })
  @IsObject()
  @IsOptional()
  filter?: MentorPaginationParamsFilterDTO
}
