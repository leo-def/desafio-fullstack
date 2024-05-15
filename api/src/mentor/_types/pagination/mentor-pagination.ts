import { IPagination } from 'src/pagination/_types/pagination';
import { MentorPaginationParams } from './mentor-pagination-params';
import { Mentor } from '../mentor';

export interface IMentorPagination extends IPagination<
  Mentor,
  MentorPaginationParams
> {
}

export class MentorPagination implements IMentorPagination {
  items: Mentor[];
  params?: MentorPaginationParams;
  count?: number;
}
