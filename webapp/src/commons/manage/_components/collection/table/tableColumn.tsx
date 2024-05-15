import React from "react";
import { TableCell } from "@mui/material";
import { TableField } from "../../../_types/config/collection/table/tableField";

export interface TableColumnProps<T> {
    readonly column: TableField<T>
    readonly item: any
    readonly index: number
}
export function TableColumn<T>({ item, column, index }: TableColumnProps<T>) {
    const { Display } = column
    return (<TableCell>{Display ? <Display index={index} item={item} column={column} /> : undefined}</TableCell>)
}
