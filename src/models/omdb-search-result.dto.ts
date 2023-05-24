import { MovieSearchDTO } from "./movie-search.dto";

export class OmdbSearchResultDTO {
  Search: MovieSearchDTO[] | undefined;

  totalResults: string | undefined;

  Response: string | undefined;
}
