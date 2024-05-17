import React, { useMemo, useCallback, useEffect, useState, useRef } from "react";
import {
    Menu as MenuIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    OpenInFull as OpenInFullIcon,
} from '@mui/icons-material';
import { IconButton, Popper, Grow, Paper, ClickAwayListener, Grid } from "@mui/material";
import { ActionEnum } from "../../../_enums/action.enum";
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue";
import { useSetManageAction } from "../../../_hooks/useSetManageAction";
import { ActionsColumnDisplayProps } from "../../../_types/props/actionsColumnDisplayProps";


export interface DefaultActionsColumnDisplayProps extends ActionsColumnDisplayProps<any> {
    readonly item: any;
    readonly index: number;
    readonly placement?: string;
}
export function DefaultActionsColumnDisplay<T>({
    index,
    item,
    placement
}: DefaultActionsColumnDisplayProps) {
    const {
        config: {
            actions: {
                onDelete
            },
            disabled
        },
    } = useGetManageContextValue<any>();
    const setAction = useSetManageAction()
    placement = placement ?? "bottom-start"
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

    const handleToggle = useCallback(() => {
        setOpen((prevOpen) => !prevOpen);
    }, [setOpen])

    const handleClose = useCallback((event: Event | React.SyntheticEvent) => {
        if (anchorRef.current?.contains(event.target as HTMLElement)) {
            return;
        }
        setOpen(false);
    }, [setOpen])


    const handleAction = useCallback((event: Event | React.SyntheticEvent, action: ActionEnum) => {
        handleClose(event)
        setAction(action, item)
    }, [handleClose, setAction, item])

    const handleDelete = useCallback((event: Event | React.SyntheticEvent) => {
        if (onDelete) {
            onDelete(item).then(() => setAction(ActionEnum.COLLECTION))
        }
    }, [item, onDelete, setAction])

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);
    const prefix = useMemo(() => `${index} - ${JSON.stringify(item)} - `, [index, item])
    return (<React.Fragment>
        <IconButton
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            ref={anchorRef}
            id={`${prefix}manage-actions-button`}
            aria-label="manage actions menu"
            aria-controls={open ? `${prefix}manage-actions-menu` : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            data-testid="toggle-actions-column-icon-button">
            <MenuIcon />
        </IconButton>
        <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            style={{ zIndex: 9999 }}
            placement="left-start"
        >
            {({ TransitionProps }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin: 'left top',
                    }}
                >
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <Grid container>
                                <Grid item>
                                    <IconButton
                                        size="large"
                                        aria-label="edit manage item"
                                        aria-controls="manage-actions-edit"
                                        aria-haspopup="true"
                                        color="inherit"
                                        onClick={(e) => handleAction(e, ActionEnum.EDIT)}
                                        disabled={disabled}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
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

                                </Grid>
                                <Grid item>
                                    <IconButton
                                        size="large"
                                        aria-label="open manage item"
                                        aria-controls="manage-actions-open"
                                        aria-haspopup="true"
                                        color="inherit"
                                        onClick={(e) => handleAction(e, ActionEnum.SHOW)}
                                        disabled={disabled}
                                    >
                                        <OpenInFullIcon />
                                    </IconButton>

                                </Grid>
                            </Grid>
                        </ClickAwayListener >
                    </Paper >
                </Grow >
            )
            }
        </Popper >
    </React.Fragment >);
}
