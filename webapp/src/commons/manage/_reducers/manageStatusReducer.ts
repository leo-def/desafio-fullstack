import { ManageStatusActionEnum } from "../_enums/manageStatusAction.enum";
import { ManageStatusState } from "../_types/status/manageStatusState";
import { initialState } from "../_constants/initialState";
import { ManageStatusAction } from "../_types/manageStatusAction";
import { ManageStatusSetActionsPayload } from "../_types/payloads/manageStatusSetActionsPayload";
import { ManageStatusSetFetchResultPayload } from "../_types/payloads/manageStatusSetFetchResultPayload";
import { ManageStatusSetSelectedPayload } from "../_types/payloads/manageStatusSetSelectedPayload";
import { ManageStatusUpdateFetchParamsPayload } from "../_types/payloads/manageStatusUpdateFetchParamsPayload";
import { ManageStatusSetCollectionViewPayload } from "../_types/payloads/manageStatusSetCollectionViewPayload";

export function manageStatusReducer<T>(
  state: ManageStatusState<T>,
  action: ManageStatusAction<T>
): ManageStatusState<T> {
  switch (action.type) {
    case ManageStatusActionEnum.SET_SELECTED:
      return {
        ...state,
        ...state,
        selected: (action.payload as ManageStatusSetSelectedPayload<T>)
          .selected,
      };
    case ManageStatusActionEnum.SET_ACTION:
      return {
        ...state,
        action: (action.payload as ManageStatusSetActionsPayload<T>).action,
        selected: (action.payload as ManageStatusSetActionsPayload<T>).selected,
        fetchParams: { ...(state.fetchParams ?? {}) },
      };
    case ManageStatusActionEnum.UPDATE_FETCH_PARAMS:
      return {
        ...state,
        fetchParams: {
          ...(state.fetchParams ?? {}),
          ...((action.payload as ManageStatusUpdateFetchParamsPayload)
            .fetchParams ?? {}),
        },
      };
    case ManageStatusActionEnum.SET_FETCH_RESULT:
      return {
        ...state,
        fetchResult: (action.payload as ManageStatusSetFetchResultPayload<T>)
          .fetchResult,
      };
    case ManageStatusActionEnum.SET_COLLECTION_VIEW:
      return {
        ...state,
        collectionView: (action.payload as ManageStatusSetCollectionViewPayload)
          .collectionView,
      };
    case ManageStatusActionEnum.RESET:
      return initialState as ManageStatusState<T>;
    default:
      return state;
  }
}
