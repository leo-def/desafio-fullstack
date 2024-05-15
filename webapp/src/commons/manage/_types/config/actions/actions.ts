import { FetchResult } from "../../status/fetchResult";
import { FetchParams } from "../../status/params/fetchParams";

export interface Actions<T> {
  onDelete?: (item: T) => Promise<void>;
  onFetch?: (params: FetchParams) => Promise<FetchResult<T>>;
}
