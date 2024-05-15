import { SidebarActionTypeEnum } from "../_enums/sidebarActionType.enum";
import { SidebarAction } from "../_types/sidebarAction";
import { SidebarState } from "../_types/sidebarState";

export const sidebarReducer = (
  state: SidebarState,
  action: SidebarAction
): SidebarState => {
  switch (action.type) {
    case SidebarActionTypeEnum.SET_OPEN:
      return { open: action.payload.open } as SidebarState;
    case SidebarActionTypeEnum.TOGGLE:
      return { open: !state.open } as SidebarState;
    default:
      return state;
  }
};
