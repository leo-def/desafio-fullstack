import { useContext } from "react";
import { ManageContext } from "../_contexts/manageContext";
import { ManageStatusActionEnum } from "../_enums/manageStatusAction.enum";
import { ActionEnum } from "../_enums/action.enum";

export function useSetManageAction<T>(): (
  action: ActionEnum,
  selected?: T
) => void {
  const { dispatch } = useContext(ManageContext);
  return (action: ActionEnum, selected?: T) => {
    if (dispatch) {
      dispatch({
        type: ManageStatusActionEnum.SET_ACTION,
        payload: { action, selected },
      });
    }
  };
}
