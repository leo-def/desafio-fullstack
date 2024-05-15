import { FetchParams } from "./params/fetchParams";

export interface FetchResult<T> {
  params: FetchParams;
  items: Array<T>;
  count: number;
}
