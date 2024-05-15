import { MessageActionTypeEnum } from "../_enums/messageActionType.enum";
import { MessageAction } from "../_types/messageAction";
import { MessageState } from "../_types/messageState";
[].push();
export const waitingReducer = (
  state: MessageState,
  action: MessageAction
): MessageState => {
  switch (action.type) {
    case MessageActionTypeEnum.ADD_MESSAGE:
      return {
        messages: [...(state.messages || []), action.payload.message],
      } as MessageState;
    case MessageActionTypeEnum.REMOVE_MESSAGE:
      return {
        messages: action.payload.message
          ? (state.messages || []).filter(
              (message) => message.id !== action.payload.message.id
            )
          : state.messages,
      } as MessageState;
    default:
      return state;
  }
};
