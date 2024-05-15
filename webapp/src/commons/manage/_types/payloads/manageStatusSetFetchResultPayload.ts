import { FetchResult } from "../status/fetchResult";

export interface ManageStatusSetFetchResultPayload<T> {
  fetchResult?: FetchResult<T>;
}
