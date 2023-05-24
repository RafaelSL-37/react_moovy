import { PaginationOptionsDTO } from "./utils/pagination-options";

export class OmdbSearchOptionsDTO extends PaginationOptionsDTO {
  title: string | undefined;

  year?: number | undefined;
} //TODO: Remove these "undefined"
