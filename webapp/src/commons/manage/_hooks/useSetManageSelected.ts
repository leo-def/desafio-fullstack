import { useContext } from "react";
import { ManageContext } from "../_contexts/manageContext";
import { ManageStatusActionEnum } from "../_enums/manageStatusAction.enum";

export function useSetManageSelected<T>(): (selected?: T) => void {
  const { dispatch } = useContext(ManageContext);
  return (selected?: T) => {
    if (dispatch) {
      dispatch({
        type: ManageStatusActionEnum.SET_SELECTED,
        payload: { selected },
      });
    }
  };
}
