import React, { PropsWithChildren, useCallback, useMemo } from "react";
import { Button } from "@mui/material";
import {
    ArrowDownward as ArrowDownwardIcon,
    ArrowUpward as ArrowUpwardIcon
} from '@mui/icons-material';
import { TableField } from "../../../_types/config/collection/table/tableField";
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue";
import { useUpdateManageFetchParams } from "../../../_hooks/useUpdateManageFetchParams";
import { SortOrderEnum } from "../../../_enums/sortOrder.enum";


export interface SortButtonProps<T> extends PropsWithChildren {
    readonly column: TableField<T>
}
export function SortButton<T>({ column, children }: SortButtonProps<T>) {
    const { field } = column
    const {
        state: { fetchParams, fetchResult, collectionView },
        config
    } = useGetManageContextValue<any>()

    const updateManageFetchParams = useUpdateManageFetchParams()
    const count = useMemo(() => fetchResult?.count ?? 0, [fetchResult?.count])

    const sortItem = useMemo(() => (fetchParams?.sort || []).find(sortItem => sortItem.field === field), [fetchParams?.sort, field])

    const toggleSort = useCallback(() => {
        updateManageFetchParams({ sort: [{ field, order: sortItem?.order === SortOrderEnum.ASC ? SortOrderEnum.DESC : SortOrderEnum.ASC }] })
    }, [updateManageFetchParams, sortItem?.order, field])


    return (<Button sx={{ ml: 1 }} onClick={() => toggleSort()} color="inherit">
            {children}
            {sortItem?.order ?
                sortItem?.order === SortOrderEnum.ASC
                    ? <ArrowDownwardIcon />
                    : <ArrowUpwardIcon />
                : undefined}
        </Button>)
}
