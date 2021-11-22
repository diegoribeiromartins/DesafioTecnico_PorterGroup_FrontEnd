import { http } from "./fetch.service";

export const movieDetailsService = (movieId: number) => {
  return http.get(`/movie/${movieId}`);
};
