import React from "react";
import { TableContainer, Paper, Table as MuiTable } from "@mui/material";
import { TableHeader } from "./tableHeader";
import { TableBody } from "./tableBody";

export function Table() {
    return (<TableContainer component={Paper} style={{
        marginLeft: 2, minWidth: 650, maxWidth: '99vw'
    }}>
        <MuiTable aria-label="table">
            <TableHeader />
            <TableBody />
        </MuiTable>
    </TableContainer>)
}
