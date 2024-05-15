import { useMemo, useCallback, ChangeEvent } from "react";
import { Accordion, AccordionSummary, FormControl, Grid, IconButton, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent } from "@mui/material";
import { GridView as GridViewIcon, TableRows as TableRowsIcon, ExpandMore as ExpandMoreIcon, Add as AddIcon } from '@mui/icons-material';
import { CollectionViewEnum } from "../../_enums/collectionView.enum";
import { useGetManageContextValue } from "../../_hooks/useGetManageContextValue";
import { useSetManageCollectionView } from "../../_hooks/useSetManageCollectionView";
import { useUpdateManageFetchParams } from "../../_hooks/useUpdateManageFetchParams";
import { FetchParams } from "../../_types/status/params/fetchParams";
import { ActionEnum } from "../../_enums/action.enum";
import { useSetManageAction } from "../../_hooks/useSetManageAction";


export function CollectionHeader() {
    const {
        state: { fetchParams, fetchResult, collectionView },
        config
    } = useGetManageContextValue<any>()
    const {
        collection: {
            filter
        }
    } = config
    const {
        map,
        id,
        Display
    } = filter
    const updateManageFetchParams = useUpdateManageFetchParams()
    const setManageCollectionView = useSetManageCollectionView()
    const count = useMemo(() => fetchResult?.count ?? 0, [fetchResult?.count])
    const limit = useMemo(() => fetchParams?.limit ?? 10, [fetchParams?.limit])
    const pages = useMemo(() => count ? Math.ceil(count / limit) : 1, [count, limit])
    const values = useMemo(() => map ? map(fetchParams) : fetchParams, [map, fetchParams])
    const disabled = filter.disabled ?? config.disabled

    const handleOnCollectionViewChange = useCallback((collectionView: CollectionViewEnum) => {
        setManageCollectionView(collectionView)
    }, [setManageCollectionView])

    const handleOnFilterChange = useCallback(async (values: Partial<FetchParams>) => {
        updateManageFetchParams(values)
    }, [updateManageFetchParams])

    const handleOnPageChange = useCallback((_event: ChangeEvent<unknown>, page: number) => {
        updateManageFetchParams({ page } as Partial<FetchParams>)
    }, [updateManageFetchParams])

    const handleOnLimitChange = useCallback((event: SelectChangeEvent) => {
        const limit = Number(event.target.value);
        updateManageFetchParams({ limit } as Partial<FetchParams>)
    }, [updateManageFetchParams])

    const setAction = useSetManageAction()
    const handleAction = useCallback((event: Event | React.SyntheticEvent, action: ActionEnum) => {
        setAction(action)
    }, [setAction])

    const pageOptions = filter.pageOptions ?? [5, 10, 20, 50, 100]
    const limitInputLabel = filter.limitInputLabel ?? "Rows per page"
    return (
        <Grid container>
            <Grid container item xs={12} alignItems="center">
                <Grid item xs={6} lg={5}>
                    <Pagination
                        showFirstButton
                        showLastButton
                        hidePrevButton
                        hideNextButton
                        disabled={disabled}
                        count={pages}
                        onChange={handleOnPageChange} />
                </Grid>
                <Grid item xs={6} lg={2}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{limitInputLabel}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={String(limit)}
                            size="small"
                            disabled={disabled}
                            label={limitInputLabel}
                            onChange={handleOnLimitChange}
                        >
                            {pageOptions.map((page: number) => <MenuItem key={page} value={page}>{page}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} lg={2}>

                    <IconButton
                        size="small"
                        aria-label="grid collection view type"
                        aria-controls="collection-view-type"
                        aria-haspopup="true"
                        disabled={disabled}
                        color={collectionView === CollectionViewEnum.CARD_GRID ? 'primary' : 'inherit'}
                        onClick={() => handleOnCollectionViewChange(CollectionViewEnum.CARD_GRID)}
                    >
                        <GridViewIcon />
                    </IconButton>

                    <IconButton
                        size="small"
                        aria-label="grid collection view type"
                        aria-controls="collection-view-type"
                        aria-haspopup="true"
                        disabled={disabled}
                        color={!collectionView || collectionView === CollectionViewEnum.TABLE ? 'primary' : 'inherit'}
                        onClick={() => handleOnCollectionViewChange(CollectionViewEnum.TABLE)}
                    >
                        <TableRowsIcon />
                    </IconButton>


                </Grid>
                <Grid item xs={6} lg={3}>
                   
                <IconButton
                        size="small"
                        aria-label="add"
                        aria-controls="add"
                        aria-haspopup="true"
                        disabled={disabled}
                        color="primary"
                        onClick={(e) => handleAction(e, ActionEnum.EDIT)}
                    >
                        <AddIcon />
                    </IconButton>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                <ExpandMoreIcon />
                            </IconButton>}
                        aria-controls="collection-header-filter-content"
                        id="collection-header-filter-header"
                    >
                        {Display ? <Display id={id} values={values} disabled={disabled} onChange={handleOnFilterChange} /> : undefined}
                    </AccordionSummary>
                </Accordion>

            </Grid>
        </Grid>)
}