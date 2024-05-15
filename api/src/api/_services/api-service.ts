import { ApiErrorResponseDTO } from '../_dos/api-error-response.dto';
import { ApiResponseDTO } from '../_dos/api-response.dto';
import { ApiResponseCodeEnum } from '../_enums/api-response-code.enum';

export class ApiService {
  static resolveApiResponse<T>(
    data: T,
    request: any,
    response: any,
    error?: string,
  ): ApiResponseDTO<T> {
    const partial = {
      timestamp: new Date().toISOString(),
      statusCode: response.statusCode,
      path: request.url,
    };
    if (error) {
      return {
        ...partial,
        data: null,
        status: ApiResponseCodeEnum.ERROR,
        error,
      } as ApiErrorResponseDTO;
    } else {
      return {
        ...partial,
        data,
        status: ApiResponseCodeEnum.SUCCESS,
      } as ApiResponseDTO<T>;
    }
  }
}
