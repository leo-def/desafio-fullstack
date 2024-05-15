import { WaitingActionTypeEnum } from "../_enums/waitingActionType.enum";
import { WaitingAction } from "../_types/waitingAction";
import { WaitingState } from "../_types/waitingState";
[].push();
export const waitingReducer = (
  state: WaitingState,
  action: WaitingAction
): WaitingState => {
  switch (action.type) {
    case WaitingActionTypeEnum.ADD_TASK:
      return {
        tasks: [...(state.tasks || []), action.payload.task],
      } as WaitingState;
    case WaitingActionTypeEnum.REMOVE_TASK:
      return {
        tasks: (state.tasks || []).filter(
          (task) => task !== action.payload.task
        ),
      } as WaitingState;
    default:
      return state;
  }
};
