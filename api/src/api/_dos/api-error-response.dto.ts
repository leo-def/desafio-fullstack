import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { ApiResponseCodeEnum } from '../_enums/api-response-code.enum';
import { ApiResponse } from '../_types/api-response';

export class ApiErrorResponseDTO implements ApiResponse<undefined> {
  @ApiHideProperty()
  data: undefined;

  @ApiProperty({
    name: 'status',
    type: ApiResponseCodeEnum.ERROR,
    example: 'ERROR',
  })
  status: ApiResponseCodeEnum = ApiResponseCodeEnum.ERROR;

  @ApiProperty({
    name: 'statusCode',
    type: Number,
    example: 500,
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

  @ApiProperty({
    name: 'error',
    type: String,
    example: 'Internal server error',
  })
  @IsString()
  error?: string;
}
