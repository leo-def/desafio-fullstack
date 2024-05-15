import React from "react";
import { TableCell } from "@mui/material";
import { TableField } from "../../../_types/config/collection/table/tableField";
import { SortButton } from "./sortButton";


export interface TableHeaderColumnProps<T> {
    readonly column: TableField<T>
}
export function TableHeaderColumn<T>({ column }: TableHeaderColumnProps<T>) {
    const { Title } = column
    return (<TableCell><SortButton column={column}>{Title ? <Title column={column} /> : undefined}</SortButton></TableCell>)
}
