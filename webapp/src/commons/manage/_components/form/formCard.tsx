import React, { useMemo, useCallback } from "react";
import {
    Send as SendIcon,
    Delete as DeleteIcon,
    Close as CloseIcon,
} from '@mui/icons-material';
import { Box, Card, CardActions, CardContent, CardHeader, IconButton } from "@mui/material";
import { ActionEnum } from "../../_enums/action.enum";
import { useGetManageContextValue } from "../../_hooks/useGetManageContextValue";
import { useSetManageAction } from "../../_hooks/useSetManageAction";
import { FormConfig } from "../../_types/config/form/formConfig";


const style = {
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
    top: '50%',
    left: '50%',
    width: 400,
} as React.CSSProperties;
export interface FormCardProps {
    readonly values: any
}
export function FormCard(props: FormCardProps) {
    const {
        state: {
            action
        },
        config
    } = useGetManageContextValue<any>()
    const setAction = useSetManageAction()
    const defaultForm = config.form as any
    const canDelete = useMemo(() => action === ActionEnum.EDIT || action === ActionEnum.SHOW, [action])
    const form = useMemo(() => (action === ActionEnum.EDIT ? defaultForm?.update : defaultForm?.create) ?? defaultForm as FormConfig<any>, [action, defaultForm])
    const values = useMemo(() => form?.map ? form?.map(props.values) : props.values, [form, props.values])
    const disabled = action === ActionEnum.SHOW || form?.disabled || config.disabled
    const onSubmit = useCallback((values: any) => {
        (form?.onSubmit
            ? form.onSubmit(values, action)
            : Promise.resolve(null)
        ).then(() => setAction(form?.actionOnSubmit ?? ActionEnum.COLLECTION))
    }, [form, setAction, action])

    const Display = form?.Display

    const handleAction = useCallback((_event: Event | React.SyntheticEvent, action: ActionEnum) => {
        setAction(action)
    }, [setAction])

    const handleDelete = useCallback((_event: Event | React.SyntheticEvent) => {
        if (config?.actions?.onDelete) {
            config?.actions?.onDelete(values).then(() => setAction(ActionEnum.COLLECTION))
        }
    }, [config?.actions, values, setAction])

    return (<Box style={style}>
        <Card>
            <CardHeader
                action={
                    <IconButton
                        aria-label="close"
                        onClick={(e) => handleAction(e, ActionEnum.COLLECTION)}>
                        <CloseIcon />
                    </IconButton>
                }
            />
            <CardContent>
                {Display ? <Display
                    onSubmit={onSubmit}
                    values={values}
                    disabled={disabled}
                    id={form?.id}
                /> : undefined}
            </CardContent>
            <CardActions>
                <IconButton
                    size="large"
                    aria-label="submit manage form item"
                    aria-controls="manage-form=actions-submit"
                    aria-haspopup="true"
                    color="inherit"
                    type="submit"
                    form={form?.id}
                    disabled={disabled}
                >
                    <SendIcon />
                </IconButton>

                {canDelete ?
                    <IconButton
                        size="large"
                        aria-label="delete manage item"
                        aria-controls="manage-actions-delete"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={handleDelete}
                        disabled={disabled}
                    >
                        <DeleteIcon />
                    </IconButton>
                    : undefined}
            </CardActions>
        </Card>
    </Box>)
}



