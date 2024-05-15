import React from "react";
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue";
import { ActionsHeaderColumnDisplayProps } from "../../../_types/props/actionsHeaderColumnDisplayProps";

export interface DefaultActionsHeaderColumnDisplayProps extends ActionsHeaderColumnDisplayProps { }

export function DefaultActionsHeaderColumnDisplay<
    T
>(props: DefaultActionsHeaderColumnDisplayProps) {
    const {
        config: {
            collection: {
                table: { actionsHeaderColumnLabel },
            },
        },
    } = useGetManageContextValue<any>();
    return (<React.Fragment>{actionsHeaderColumnLabel}</React.Fragment>);
}
