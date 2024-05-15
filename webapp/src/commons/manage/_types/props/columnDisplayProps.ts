import { TableField } from "../config/collection/table/tableField";

export interface ColumnDisplayProps<T> {
  readonly column: TableField<T>;
  readonly item: T;
  readonly index: number;
}
