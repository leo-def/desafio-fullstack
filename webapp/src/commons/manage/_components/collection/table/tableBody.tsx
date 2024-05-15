import React from "react";
import { TableBody as MuiTableBody } from "@mui/material";
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue";
import { TableRow } from "./tableRow";

export function TableBody() {
    const {
        state: { fetchResult }
    } = useGetManageContextValue<any>()
    const items = fetchResult?.items ?? []
    return (<MuiTableBody>
        {items.map((item: any, index: number) => <TableRow key={JSON.stringify(item)} item={item} index={index} />)}
    </MuiTableBody>)
}