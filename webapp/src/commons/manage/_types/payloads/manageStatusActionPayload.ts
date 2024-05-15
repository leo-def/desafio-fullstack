import { ManageStatusSetActionsPayload } from "./manageStatusSetActionsPayload";
import { ManageStatusSetCollectionViewPayload } from "./manageStatusSetCollectionViewPayload";
import { ManageStatusSetFetchResultPayload } from "./manageStatusSetFetchResultPayload";
import { ManageStatusSetSelectedPayload } from "./manageStatusSetSelectedPayload";
import { ManageStatusUpdateFetchParamsPayload } from "./manageStatusUpdateFetchParamsPayload";

export type ManageStatusActionPayload<T> =
  | ManageStatusSetActionsPayload<T>
  | ManageStatusSetFetchResultPayload<T>
  | ManageStatusSetSelectedPayload<T>
  | ManageStatusUpdateFetchParamsPayload
  | ManageStatusSetCollectionViewPayload;
