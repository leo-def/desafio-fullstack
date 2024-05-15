import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse, ApiInternalServerErrorResponse, ApiResponse, ApiBody, ApiCreatedResponse, ApiParam } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { CreateMentorDTO } from '../_dtos/create-mentor.dto';
import { MentorDTO } from '../_dtos/mentor.dto';
import { UpdateMentorDTO } from '../_dtos/update-mentor.dto';
import { CreateMentor } from '../_types/create-mentor';
import { UpdateMentor } from '../_types/update-mentor';
import { MentorService } from '../_services/mentor.service';
import { MentorResponseDTO } from '../_dtos/mentor-response.dto';

@ApiTags('Mentor API | Mentors')
@Controller('mentor')
export class MentorController {


    constructor(private readonly service: MentorService) {}
    @ApiOperation({ summary: 'Create Mentor.' })
    @ApiCreatedResponse({
      description: 'Mentor created successfully.',
      type: MentorResponseDTO,
    })
    @ApiInternalServerErrorResponse({
      status: 500,
      description: 'Internal server error.',
    })
    @ApiResponse({ 
      status: 400, 
      description: 'Bad Request.' 
    })
    @ApiBody({
      description: 'Create mentor param.',
      type: CreateMentorDTO
    })
    @Post()
    async create(@Body() data: CreateMentorDTO): Promise<MentorDTO | undefined>{
      const request =  plainToInstance(CreateMentor, data)
      const response = await this.service.create(request)
      return plainToInstance(MentorDTO, response)
    }
  
    @ApiOperation({ summary: 'Update Mentor.' })
    @ApiOkResponse({
      description: 'Mentor updated successfully.',
      type: MentorResponseDTO,
    })
    @ApiInternalServerErrorResponse({
      status: 500,
      description: 'Internal server error',
    })
    @ApiResponse({ 
      status: 400, 
      description: 'Bad Request.' 
    })
    @ApiBody({ 
      description: 'Update mentor param.',
      type: UpdateMentorDTO
    })
    @ApiParam({
      name: 'id',
      required: true,
      description: 'Mentor id.',
      type: 'string',
    })
    @Put("/:id")
    async update(@Param('id') id: string, @Body() data: UpdateMentorDTO): Promise<MentorDTO | undefined> {
      const request =  plainToInstance(UpdateMentor, data)
      const response = await this.service.update(id, request);
      return plainToInstance(MentorDTO, response)
    }
  }
  
