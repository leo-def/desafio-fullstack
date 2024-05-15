import React from "react";
import { ColumnDisplayProps } from "../../commons/manage/_types/props/columnDisplayProps";


export function MentorColumnDisplay<T>({ column, item }: ColumnDisplayProps<T>) {
    return (<React.Fragment>{item ? (item as any)[column.field] : undefined}</React.Fragment>)
}