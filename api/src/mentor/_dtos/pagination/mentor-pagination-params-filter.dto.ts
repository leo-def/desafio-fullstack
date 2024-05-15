import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { MentorPaginationParamsFilter } from "../../../mentor/_types/pagination/mentor-pagination-params";

export class MentorPaginationParamsFilterDTO extends MentorPaginationParamsFilter {

    @ApiProperty({
      name: 'id',
      type: String,
    })
    @IsString()
    @IsOptional()
    id: string | undefined;
  
    @ApiProperty({
      name: 'name',
      type: String,
    })
    @IsString()
    @IsOptional()
    name: string | undefined;
  
    @ApiProperty({
      name: 'cpf',
      type: String,
    })
    @IsString()
    @IsOptional()
    cpf: string | undefined;
  
    @ApiProperty({
      name: 'email',
      type: String,
    })
    @IsString()
    @IsOptional()
    email: string | undefined;
  }
  