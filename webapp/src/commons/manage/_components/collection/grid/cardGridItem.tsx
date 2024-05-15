import React, { useCallback } from "react";
import { Card, CardActions, CardContent, Grid, IconButton } from "@mui/material";
import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    OpenInFull as OpenInFullIcon,
} from '@mui/icons-material';
import { ActionEnum } from "../../../../../commons/manage/_enums/action.enum";
import { useGetManageContextValue } from "../../../../../commons/manage/_hooks/useGetManageContextValue";
import { useSetManageAction } from "../../../../../commons/manage/_hooks/useSetManageAction";

export interface CardGridItemProps {
    readonly item: any;
    readonly index: number;
}
export function CardGridItem({ item, index }: CardGridItemProps) {
    const {
        config: {
            collection: { grid },
            actions: {
                onDelete
            },
            disabled
        }
    } = useGetManageContextValue()


    const setAction = useSetManageAction()
    const handleAction = useCallback((event: Event | React.SyntheticEvent, action: ActionEnum) => {
        setAction(action, item)
    }, [setAction, item])

    const handleDelete = useCallback((event: Event | React.SyntheticEvent) => {
        if (onDelete) {
            onDelete(item).then(() => setAction(ActionEnum.COLLECTION))
        }
    }, [item, onDelete, setAction])

    const { ItemDisplay } = grid
    return (<Grid item data-testid="card-grid-item">
        <Card>
            <CardContent>
                {ItemDisplay ? <ItemDisplay item={item} index={index} /> : undefined}
            </CardContent>

            <CardActions>
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
            </CardActions>
        </Card>
    </Grid>)
}