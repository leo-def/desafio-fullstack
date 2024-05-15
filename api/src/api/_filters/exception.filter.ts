import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiService } from '../_services/api-service';

@Catch(Error)
export class GenericExceptionFilter<Error> implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const error = String((exception as any)?.message || exception);
    if (statusCode === HttpStatus.INTERNAL_SERVER_ERROR) {
      Logger.error(exception);
    } else {
      Logger.warn(exception);
    }
    response
      .status(statusCode)
      .json(ApiService.resolveApiResponse(null, request, response, error));
  }
}
