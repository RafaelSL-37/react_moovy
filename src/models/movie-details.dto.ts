export class MovieDetailsDTO {
  Title!: string;
  Year: string | undefined;
  Rated: string | undefined;
  Released: string | undefined;
  Runtime: string | undefined;
  Genre: string | undefined;
  Director: string | undefined;
  Writer: string | undefined;
  Actors: string | undefined;
  Plot: string | undefined;
  Language: string | undefined;
  Country: string | undefined;
  Awards: string | undefined;
  Poster!: string;
  Ratings: OmdbRatings[] | undefined;
  Metascore: string | undefined;
  imdbRating: string | undefined;
  imdbVotes: string | undefined;
  imdbID: string | undefined;
  Type: string | undefined;
  DVD: string | undefined;
  BoxOffice: string | undefined;
  Production: string | undefined;
  Website: string | undefined;
  Response: string | undefined;
} //TODO: Remove these "undefined"

class OmdbRatings {
  Source: string | undefined;
  Value: string | undefined;
} //TODO: Remove these "undefined"
