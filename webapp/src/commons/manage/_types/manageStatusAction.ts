import { AppAction } from "../../shared/_types/appAction";
import { ManageStatusActionEnum } from "../_enums/manageStatusAction.enum";
import { ManageStatusActionPayload } from "./payloads/manageStatusActionPayload";

export interface ManageStatusAction<T>
  extends AppAction<ManageStatusActionEnum, ManageStatusActionPayload<T>> {}
