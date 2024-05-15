import React, { useEffect } from "react";
import { Table } from "./table/table";
import { CardGrid } from "./grid/cardGrid";
import { CollectionHeader } from "./collectionHeader";
import { ActionEnum } from "../../_enums/action.enum";
import { CollectionViewEnum } from "../../_enums/collectionView.enum";
import { useGetManageContextValue } from "../../_hooks/useGetManageContextValue";
import { useSetManageFetchResult } from "../../_hooks/useSetManageFetchResult";

export function Collection() {
    const {
        state: { fetchParams, fetchResult, collectionView, action },
        config: { actions: { onFetch } }
    } = useGetManageContextValue<any>()
    const setFetchResult = useSetManageFetchResult<any>()
    const showTable = !collectionView || collectionView === CollectionViewEnum.TABLE
    const showCardGrid = collectionView === CollectionViewEnum.CARD_GRID
    useEffect(() => {
        if (action === ActionEnum.COLLECTION && onFetch && fetchParams && fetchParams !== fetchResult?.params) {
            onFetch(fetchParams).then(result => setFetchResult(result))
        }
    }, [onFetch, fetchResult, setFetchResult, action, fetchParams])


    return (<React.Fragment>
        <CollectionHeader data-testid="collection-header" />
        {showTable  ? <Table data-testid="table"/> : undefined}
        {showCardGrid ? <CardGrid data-testid="card-grid" /> : undefined}
    </React.Fragment>)
}
