import React from "react";
import { ManageContent } from "./manageContent";
import { ManageConfig } from "../_types/config/manageConfig";
import { ManageContextProvider } from "./manageContextProvider";

export interface ManageProps<T> {
    readonly config: ManageConfig<T>
}

export function Manage<T>({ config }: ManageProps<T>) {
    return (<ManageContextProvider config={config} data-testid="manage-context-provider" > <ManageContent data-testid="manage-content" /> </ManageContextProvider>)
}