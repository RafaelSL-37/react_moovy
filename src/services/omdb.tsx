import axios from "axios";
import { OmdbSearchOptionsDTO } from "../models/omdb-search-options.dto";

//Currently, OMDb doesn't support result limit per page, the default is 10
const searchPaginated = (options: OmdbSearchOptionsDTO) => {
  const yearSearch = options.year ? `&y=${options.year}` : '';

  const result = axios.get(
    `${process.env.OMDB_API_URL}?apikey=${process.env.OMDB_KEY}&s=${options.title}&page=${options.page}${yearSearch}`, {}
  );

  return result;
};

const getById = (id: string) => {
  const result = axios.get(
    `${process.env.OMDB_API_URL}?apikey=${process.env.OMDB_KEY}&i=${id}`, {}
  );

  return result;
}

export const omdbApi = { searchPaginated, getById };