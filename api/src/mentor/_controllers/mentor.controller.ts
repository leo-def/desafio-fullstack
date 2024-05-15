import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse, ApiInternalServerErrorResponse, ApiResponse, ApiBody, ApiCreatedResponse, ApiParam } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { CreateMentorDTO } from '../_dtos/create-mentor.dto';
import { MentorDTO } from '../_dtos/mentor.dto';
import { UpdateMentorDTO } from '../_dtos/update-mentor.dto';
import { CreateMentor } from '../_types/create-mentor';
import { UpdateMentor } from '../_types/update-mentor';
import { MentorService } from '../_services/mentor.service';
import { MentorPaginationDTO } from '../_dtos/pagination/mentor-pagination.dto';
import { MentorPaginationParamsDTO } from '../_dtos/pagination/mentor-pagination-params.dto';
import { MentorPaginationParams } from '../_types/pagination/mentor-pagination-params';
import { MentorPaginationResponseDTO } from '../_dtos/mentor-pagination-response.dto';
import { MentorResponseDTO } from '../_dtos/mentor-response.dto';

@ApiTags('Mentor API | Mentors')
@Controller('mentor')
export class MentorController {


    constructor(private readonly service: MentorService) {}

    @ApiOperation({ summary: 'Get a mentor by ID.'})
    @ApiOkResponse({
      description: 'Successful operation.',
      type: MentorResponseDTO,
    }) 
    @ApiInternalServerErrorResponse({
      status: 500,
      description: 'Internal server error.',
    })
    @ApiResponse({ 
      status: 404, 
      description: 'Mentor not found.' 
    })
    @Get()
    async find(@Param('id') id: string): Promise<MentorDTO | undefined> {
      const response = await this.service.byId(id)
      return plainToInstance(MentorDTO, response)
    }

    @ApiOperation({ summary: 'Fetch mentors by parameters.' })
    @ApiOkResponse({
      description: 'Successful operation.',
      type: MentorPaginationResponseDTO,
      isArray: true
    }) 
    @ApiInternalServerErrorResponse({
      status: 500,
      description: 'Internal server error.',
    })
    @ApiResponse({ 
      status: 400, 
      description: 'Bad Request.' 
    })
    @ApiBody({ description: 'Fetch params.', type: MentorPaginationParamsDTO })
    @Post("fetch")
    async fetch(@Body() params: MentorPaginationParamsDTO): Promise<MentorPaginationDTO>  {
      const request =  plainToInstance(MentorPaginationParams, params)
      const response = await this.service.fetch(request)
      return plainToInstance(MentorPaginationDTO, response)
    }
    
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
 
    @ApiOperation({ summary: 'Delete Mentor.' })
    @ApiOkResponse({
      description: 'Mentor deleted successfully.',
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
    @ApiParam({
      name: 'id',
      required: true,
      description: 'Mentor id.',
      type: 'string',
    })
    @Delete("/:id")
    async delete(@Param('id') id: string): Promise<MentorDTO | undefined> {
      const response = await  this.service.delete(id);
      return plainToInstance(MentorDTO, response)
    }

  }
  
