import { useContext } from "react";
import { MessageContext } from "../_contexts/messageContext";
import { MessageActionTypeEnum } from "../_enums/messageActionType.enum";
import { Message, buildMessage } from "../_types/message";

export function useAddMessage(): (message: string | Message) => void {
  const { dispatch } = useContext(MessageContext);
  return (message: string | Message) => {
    if (dispatch) {
      dispatch({
        type: MessageActionTypeEnum.ADD_MESSAGE,
        payload: { message: buildMessage(message) },
      });
    }
  };
}
