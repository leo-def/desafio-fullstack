import React from "react";
import { Modal } from "@mui/material";
import { ActionEnum } from "../_enums/action.enum";
import { useGetManageContextValue } from "../_hooks/useGetManageContextValue";
import { Collection } from "./collection/collection";
import { FormCard } from "./form/formCard";

export function ManageContent() {
    const {
        state: { action, selected }
    } = useGetManageContextValue<any>()
    const showForm = (action === ActionEnum.EDIT || action === ActionEnum.CREATE || action === ActionEnum.SHOW)
    return (<React.Fragment>
        <Collection  data-testid="collection-component" />
        {<Modal open={showForm}  data-testid="dialog-component" ><><FormCard values={selected}  data-testid="form-card-component" /></></Modal>}
    </React.Fragment>)
}


