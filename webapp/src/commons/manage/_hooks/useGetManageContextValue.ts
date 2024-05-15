import { useContext } from "react";
import { ManageContext } from "../_contexts/manageContext";
import { ManageContextValue } from "../_types/manageContextValue";

export function useGetManageContextValue<T>(): ManageContextValue<T> {
  const contextValue = useContext(ManageContext);
  return contextValue as ManageContextValue<T>;
}
