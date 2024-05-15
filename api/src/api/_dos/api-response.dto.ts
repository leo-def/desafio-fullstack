import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { ApiResponseCodeEnum } from '../_enums/api-response-code.enum';
import { IsNumber, IsString } from 'class-validator';
import { ApiResponse } from '../_types/api-response';

export class ApiResponseDTO<T> implements ApiResponse<T> {
  data: T;

  @ApiProperty({
    name: 'status',
    type: ApiResponseCodeEnum.SUCCESS,
    example: 'SUCCESS',
  })
  status: ApiResponseCodeEnum = ApiResponseCodeEnum.SUCCESS;

  @ApiProperty({
    name: 'statusCode',
    type: Number,
    example: 200,
  })
  @IsNumber()
  statusCode?: number;

  @ApiProperty({
    name: 'timestamp',
    type: String,
    example: '2023-11-28T15:09:41.181Z',
  })
  @IsString()
  timestamp: string;

  @ApiProperty({
    name: 'path',
    type: String,
    example: '/auth/sign-in',
  })
  @IsString()
  path: string;

  @ApiHideProperty()
  error?: string;
}
