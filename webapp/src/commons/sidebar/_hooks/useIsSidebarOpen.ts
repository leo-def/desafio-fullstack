import { useContext } from "react";
import { SidebarContext } from "../_contexts/sidebarContext";

export function useIsSidebarOpen(): boolean | undefined {
  const { state } = useContext(SidebarContext);
  return state?.open;
}
