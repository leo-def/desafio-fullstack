import { ActionEnum } from "../../_enums/action.enum";


export interface ManageStatusSetActionsPayload<T> {
  action: ActionEnum;
  selected?: T;
}
