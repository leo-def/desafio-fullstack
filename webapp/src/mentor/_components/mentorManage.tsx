import React, { useCallback, useMemo } from "react";
import { useApiFetch } from "../../commons/api/_hooks/useApiFetch";
import { Manage } from "../../commons/manage/_components/manage";
import { Actions } from "../../commons/manage/_types/config/actions/actions";
import { CollectionConfig } from "../../commons/manage/_types/config/collection/collectionConfig";
import { GridConfig } from "../../commons/manage/_types/config/collection/grid/gridConfig";
import { TableConfig } from "../../commons/manage/_types/config/collection/table/tableConfig";
import { TableField } from "../../commons/manage/_types/config/collection/table/tableField";
import { FormConfig } from "../../commons/manage/_types/config/form/formConfig";
import { ManageConfig } from "../../commons/manage/_types/config/manageConfig";
import { FetchParams } from "../../commons/manage/_types/status/params/fetchParams";
import { ActionEnum } from "../../commons/manage/_enums/action.enum";
import { DocService } from "../../commons/shared/_services/docService";
import { MentorDto } from "../_types/mentor.dto";
import { MentorFilterDisplay } from "./mentorFilterDisplay";
import { MentorFormDisplay } from "./mentorFormDisplay";
import { MentorGridItemDisplay } from "./mentorGridItemDisplay";
import { MentorColumnDisplay } from "./mentorColumnDisplay";
import { MentorColumnTitleDisplay } from "./mentorColumnTitleDisplay";
import { ApiPaginationService } from "../../commons/manage/_services/apiPaginationService";





export interface MentorManageProps {
    readonly disabled?: boolean
}
export function MentorManage({ disabled }: MentorManageProps) {
    const apiFetch = useApiFetch()

    const onDelete = useCallback((item: MentorDto) => {
        return apiFetch(`mentor/${item.id}`, { method: 'DELETE' }).then(() => {
            return
        })
    }, [apiFetch])

    const onFetch = useCallback((params: FetchParams) => {
        return apiFetch('mentor/fetch', {
            method: 'POST', body: JSON.stringify(
                ApiPaginationService.fromFetchParams<'id' | 'name' | 'cpf' | 'email'>(params))
        })
            .then(async (response) => {
                if (!response) {
                    return undefined
                }
                const jsonResponse = await response.json()
                return ({
                    items: (jsonResponse?.data?.items ?? []) as Array<MentorDto>,
                    params,
                    count: jsonResponse?.data?.count
                })
            })
    }, [apiFetch])

    const filterMap = useCallback(async (param: FetchParams) => param, [])

    const onSubmit = useCallback((item: MentorDto, action: ActionEnum) => {
        const { id, ...values } = item
        const method = id ? 'PUT' : 'POST'
        return apiFetch(`mentor/${id ?? ''}`, { method, body: JSON.stringify(values) })
            .then(async (response) => {
                if (!response) {
                    return undefined
                }
                const data = await response.json()
                return data?.data as MentorDto | undefined
            })
    }, [apiFetch])

    const config = useMemo(() => {
        return {
            disabled,
            collection: {
                grid: {
                    ItemDisplay: MentorGridItemDisplay,
                } as GridConfig<MentorDto>,
                table: {
                    columns: [
                        {
                            field: 'id',
                            label: 'ID',
                            Title: MentorColumnTitleDisplay<MentorDto>,
                            Display: MentorColumnDisplay<MentorDto>,
                        } as TableField<MentorDto>,
                        {
                            field: 'name',
                            label: 'Name',
                            Title: MentorColumnTitleDisplay<MentorDto>,
                            Display: MentorColumnDisplay<MentorDto>,
                        } as TableField<MentorDto>,
                        {
                            field: 'cpf',
                            label: 'CPF',
                            Title: MentorColumnTitleDisplay<MentorDto>,
                            Display: ({item}) => <>{DocService.formatCPFMask(item.cpf)}</>,
                        } as TableField<MentorDto>,
                        {
                            field: 'email',
                            label: 'Email',
                            Title: MentorColumnTitleDisplay<MentorDto>,
                            Display: MentorColumnDisplay<MentorDto>,
                        } as TableField<MentorDto>
                    ]
                } as TableConfig<MentorDto>,
                filter: {
                    id: 'mentor-filter-form',
                    map: filterMap,
                    disabled,
                    Display: MentorFilterDisplay,
                    limitInputLabel: 'Rows per page'
                }
            } as CollectionConfig<MentorDto>,
            form: {
                id: 'mentor-form',
                onSubmit,
                Display: MentorFormDisplay,
                disabled
            } as FormConfig<MentorDto>,
            actions: {
                onDelete,
                onFetch
            } as Actions<MentorDto>
        } as ManageConfig<MentorDto>
    }, [disabled, filterMap, onDelete, onFetch, onSubmit])

    return (<Manage config={config} />)
}