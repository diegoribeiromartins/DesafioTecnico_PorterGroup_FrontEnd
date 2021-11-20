import { http } from "./fetch.service";

export const movieUpcomingService = (movieId: number) => {
  return http.get(`/movie/${movieId}`);
};
