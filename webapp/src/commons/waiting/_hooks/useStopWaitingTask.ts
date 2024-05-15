import { useContext } from "react";
import { WaitingContext } from "../_contexts/waitingContext";
import { WaitingActionTypeEnum } from "../_enums/waitingActionType.enum";

export function useStopWaitingTask(): (task: string) => void {
  const { dispatch } = useContext(WaitingContext);
  return (task: string) => {
    if (dispatch) {
      dispatch({
        type: WaitingActionTypeEnum.REMOVE_TASK,
        payload: { task },
      });
    }
  };
}
