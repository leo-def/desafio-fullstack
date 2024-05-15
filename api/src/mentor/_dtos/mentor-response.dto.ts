import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDTO } from '../../api/_dos/api-response.dto';
import { MentorDTO } from './mentor.dto';

export class MentorResponseDTO extends ApiResponseDTO<MentorDTO> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: MentorDTO,
  })
  @IsObject()
  data: MentorDTO;
}
