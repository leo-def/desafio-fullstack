
import { ManageConfig } from "./config/manageConfig";
import { ManageStatusState } from "./status/manageStatusState";
import { ManageStatusAction } from "./manageStatusAction";
import { AppReducerContext } from "../../shared/_types/appReducerContext";

export interface ManageContextValue<T>
  extends AppReducerContext<ManageStatusState<T>, ManageStatusAction<T>> {
  config: ManageConfig<T>;
}
