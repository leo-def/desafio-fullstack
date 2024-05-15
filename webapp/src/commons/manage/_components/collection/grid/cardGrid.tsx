import { Grid } from "@mui/material";
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue";
import { CardGridItem } from "./cardGridItem";

export function CardGrid() {
    const {
        state: { fetchResult }
    } = useGetManageContextValue<any>()
    const items = fetchResult?.items ?? []
    return (<Grid container spacing={2}>{items.map((item: any, index: number) => <CardGridItem key={JSON.stringify(item)} item={item} index={index} />)}</Grid>)
}