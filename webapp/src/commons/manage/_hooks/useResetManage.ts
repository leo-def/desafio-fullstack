import { useContext } from "react";
import { ManageContext } from "../_contexts/manageContext";
import { ManageStatusActionEnum } from "../_enums/manageStatusAction.enum";

export function useResetManage(): () => void {
  const { dispatch } = useContext(ManageContext);
  return () => {
    if (dispatch) {
      dispatch({
        type: ManageStatusActionEnum.RESET,
        payload: {},
      });
    }
  };
}
