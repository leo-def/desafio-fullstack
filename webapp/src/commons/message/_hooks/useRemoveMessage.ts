import { useContext } from "react";
import { MessageContext } from "../_contexts/messageContext";
import { MessageActionTypeEnum } from "../_enums/messageActionType.enum";
import { Message } from "../_types/message";

export function useRemoveMessage(): (message: Message) => void {
  const { dispatch } = useContext(MessageContext);
  return (message: Message) => {
    if (dispatch) {
      dispatch({
        type: MessageActionTypeEnum.REMOVE_MESSAGE,
        payload: { message },
      });
    }
  };
}
