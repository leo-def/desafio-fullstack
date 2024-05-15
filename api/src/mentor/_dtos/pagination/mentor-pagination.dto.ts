
import { MentorPagination } from "../../../mentor/_types/pagination/mentor-pagination";
import { MentorDTO } from "../mentor.dto";
import { MentorPaginationParamsDTO } from "./mentor-pagination-params.dto";


export class MentorPaginationDTO extends MentorPagination {
    items: MentorDTO[];
    params?: MentorPaginationParamsDTO;
    count?: number;

}
