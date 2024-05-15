import { useContext } from "react";
import { SidebarContext } from "../_contexts/sidebarContext";
import { SidebarActionTypeEnum } from "../_enums/sidebarActionType.enum";

export function useToggleSidebarOpen(): void {
  const { dispatch, state } = useContext(SidebarContext);
  if (dispatch) {
    dispatch({
      type: SidebarActionTypeEnum.SET_OPEN,
      payload: { open: !state.open },
    });
  }
}
