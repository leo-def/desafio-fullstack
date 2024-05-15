import { ComponentType } from "react";
import { TableField } from "./tableField";
import { ActionsColumnDisplayProps } from "../../../props/actionsColumnDisplayProps";
import { ActionsHeaderColumnDisplayProps } from "../../../props/actionsHeaderColumnDisplayProps";

export interface TableConfig<T> {
  columns: Array<TableField<T>>;
  actionsHeaderColumnLabel?: string;
  ActionsHeaderColumnDisplay:
    | ComponentType<ActionsHeaderColumnDisplayProps>
    | undefined;
  ActionsColumnDisplay: ComponentType<ActionsColumnDisplayProps<T>> | undefined;
}
