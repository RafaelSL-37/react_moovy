import axios from "axios";
import { OmdbSearchOptionsDTO } from "../models/omdb-search-options.dto";

const searchPaginated = async (options: OmdbSearchOptionsDTO) => {
  await axios.get(
    `${process.env.OMDB_API_URL}?apikey=${process.env.OMDB_KEY}&s=${options.title}`, {}
  );
};

const getById = async (id: string) => {
  await axios.get(
    `${process.env.OMDB_API_URL}?apikey=${process.env.OMDB_KEY}&i=s=${id}`, {}
  );
}

export const omdbApi = { searchPaginated, getById };