import { Filter } from "./filter";
import { Sort } from "./sort";

export interface FetchParams {
  page?: number;
  limit?: number;
  sort?: Array<Sort>;
  select?: Array<string>;
  filter?: Array<Filter>;
}
