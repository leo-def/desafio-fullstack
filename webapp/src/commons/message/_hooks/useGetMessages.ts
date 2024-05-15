import { useContext } from "react";
import { MessageContext } from "../_contexts/messageContext";
import { Message } from "../_types/message";

export function useGetMessages(): Message[] {
  const { state } = useContext(MessageContext);
  return state?.messages;
}
