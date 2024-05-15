import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDTO } from '../../api/_dos/api-response.dto';
import { MentorPaginationDTO } from './pagination/mentor-pagination.dto';

export class MentorPaginationResponseDTO extends ApiResponseDTO<MentorPaginationDTO> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: MentorPaginationDTO,
  })
  @IsObject()
  data: MentorPaginationDTO;
}
