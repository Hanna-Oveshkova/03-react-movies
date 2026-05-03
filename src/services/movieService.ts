import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN = import.meta.env.VITE_TMBD_TOKEN;

export async function fetchMovies(query: string): Promise<Movie[]> {
  const config = {
    params: { query },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  const response: AxiosResponse<{ results: Movie[] }> = await axios.get(
    BASE_URL,
    config,
  );
  return response.data.results;
}
