import { AppAction } from "../../shared/_types/appAction";
import { MessageActionTypeEnum } from "../_enums/messageActionType.enum";
import { MessageActionPayload } from "./messageActionPayload";

export interface MessageAction
  extends AppAction<MessageActionTypeEnum, MessageActionPayload> {}
