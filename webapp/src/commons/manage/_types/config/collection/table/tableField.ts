import { ComponentType } from "react";
import { ColumnDisplayProps } from "../../../props/columnDisplayProps";
import { ColumnTitleDisplayProps } from "../../../props/columnTitleDisplayProps";

export interface TableField<T> {
  field: string;
  label?: string;
  Title: ComponentType<ColumnTitleDisplayProps<T>> | undefined;
  Display: ComponentType<ColumnDisplayProps<T>> | undefined;
}
