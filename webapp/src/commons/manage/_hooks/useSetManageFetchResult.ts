import { useContext } from "react";
import { ManageContext } from "../_contexts/manageContext";
import { ManageStatusActionEnum } from "../_enums/manageStatusAction.enum";
import { FetchResult } from "../_types/status/fetchResult";

export function useSetManageFetchResult<T>(): (
  fetchResult: FetchResult<T>
) => void {
  const { dispatch } = useContext(ManageContext);
  return (fetchResult?: FetchResult<T>) => {
    if (dispatch) {
      dispatch({
        type: ManageStatusActionEnum.SET_FETCH_RESULT,
        payload: { fetchResult },
      });
    }
  };
}
