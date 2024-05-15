
import { AppAction } from "../../shared/_types/appAction";
import { WaitingActionTypeEnum } from "../_enums/waitingActionType.enum";
import { WaitingActionPayload } from "./waitingActionPayload";

export interface WaitingAction
  extends AppAction<WaitingActionTypeEnum, WaitingActionPayload> {}
