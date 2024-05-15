import { ApiResponseCodeEnum } from '../_enums/api-response-code.enum';

export interface ApiResponse<T> {
  data?: T;
  status: ApiResponseCodeEnum;
  statusCode?: number;
  timestamp: string;
  path: string;
  error?: string;
}
