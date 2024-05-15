import { ColumnTitleDisplayProps } from "../../commons/manage/_types/props/columnTitleDisplayProps";
import React from "react";

export function MentorColumnTitleDisplay<T>({ column }: ColumnTitleDisplayProps<T>) {
    return (<React.Fragment>{column.label}</React.Fragment>)
}