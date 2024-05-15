import React from "react";
import { TableRow as MuiTableRow, TableCell } from "@mui/material";
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue";
import { TableColumn } from "./tableColumn";
import { DefaultActionsColumnDisplay } from "./defaultActionsColumnDisplay";

export interface TableRowProps {
    readonly item: any
    readonly index: number
}
export function TableRow({ item, index }: TableRowProps) {
    const {
        config: {
            collection: { table: { columns, ActionsColumnDisplay } }
        }
    } = useGetManageContextValue<any>()
    const ColumnDisplay = ActionsColumnDisplay ?? DefaultActionsColumnDisplay
    return (<MuiTableRow>
        {columns.map((column, index) => <TableColumn key={JSON.stringify(column)} column={column} item={item} index={index} />)}
        <TableCell align="right">{ColumnDisplay ? <ColumnDisplay item={item} index={index} /> : undefined}</TableCell>
    </MuiTableRow>)
}