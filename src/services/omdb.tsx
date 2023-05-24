import axios from "axios";
import { MovieDetailsDTO } from "../models/movie-details.dto";
import { OmdbSearchOptionsDTO } from "../models/omdb-search-options.dto";
import { OmdbSearchResultDTO } from "../models/omdb-search-result.dto";

//Currently, OMDb doesn't support result limit per page, the default is 10
const searchPaginated = async (options: OmdbSearchOptionsDTO): Promise<OmdbSearchResultDTO> => {
  const yearSearch = options.year ? `&y=${options.year}` : '';

  const result = await axios.get(
    `${process.env.OMDB_API_URL}?apikey=${process.env.OMDB_KEY}&s=${options.title}&page=${options.page}${yearSearch}`, {}
  );

  return result.data;
};

const getById = async (id: string): Promise<MovieDetailsDTO | undefined> => {
  const result = await axios.get(
    `${process.env.OMDB_API_URL}?apikey=${process.env.OMDB_KEY}&i=${id}`, {}
  );

  return result.data;
}

export const omdbApi = { searchPaginated, getById };