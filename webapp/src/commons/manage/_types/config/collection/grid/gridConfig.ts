import { ComponentType } from "react";
import { GridItemDisplayProps } from "../../../props/gridItemDisplayProps";

export interface GridConfig<T> {
  ItemDisplay: ComponentType<GridItemDisplayProps<T>> | undefined;
}
