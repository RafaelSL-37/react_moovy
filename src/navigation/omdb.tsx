import axios from "axios";

const omdbApi = axios.post(
  `${process.env.OMDB_API_URL}`, {}
);

export default omdbApi;