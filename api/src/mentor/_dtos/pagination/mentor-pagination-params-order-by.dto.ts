import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsIn } from "class-validator";
import { MentorPaginationParamsOrderBy } from "../../../mentor/_types/pagination/mentor-pagination-params";

export class MentorPaginationParamsOrderByDTO extends MentorPaginationParamsOrderBy {
  
    @ApiProperty({
      name: 'id',
      type: String,
      enum: ['asc','desc']
    })
    @IsString()
    @IsOptional()
    @IsIn(['asc','desc'])
    id:"asc" | "desc" | undefined;
    
    @ApiProperty({
      name: 'name',
      type: String,
      enum: ['asc','desc']
    })
    @IsString()
    @IsOptional()
    @IsIn(['asc','desc'])
    name:"asc" | "desc" | undefined;
    
    @ApiProperty({
      name: 'cpf',
      type: String,
      enum: ['asc','desc']
    })
    @IsString()
    @IsOptional()
    @IsIn(['asc','desc'])
    cpf:"asc" | "desc" | undefined;
    
    @ApiProperty({
      name: 'email',
      type: String,
      enum: ['asc','desc']
    })
    @IsString()
    @IsOptional()
    @IsIn(['asc','desc'])
    email:"asc" | "desc" | undefined;
  }