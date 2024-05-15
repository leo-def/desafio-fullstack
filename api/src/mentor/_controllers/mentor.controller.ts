import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse, ApiInternalServerErrorResponse, ApiResponse, ApiBody, ApiCreatedResponse, ApiParam } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';

@ApiTags('Mentor API | Mentors')
@Controller('mentor')
export class MentorController {


    constructor(private readonly service: MentorService) {}
  }
  
