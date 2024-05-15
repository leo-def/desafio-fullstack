import React from "react";
import { Typography } from "@mui/material";
import { GridItemDisplayProps } from "../../commons/manage/_types/props/gridItemDisplayProps";
import { MentorDto } from "../_types/mentor.dto";

export interface MentorGridItemDisplayProps extends GridItemDisplayProps<MentorDto> {
    readonly item: MentorDto;
}

export function MentorGridItemDisplay({ item }: MentorGridItemDisplayProps) {
    return (<Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary">
        {item.name}
    </Typography>)
}