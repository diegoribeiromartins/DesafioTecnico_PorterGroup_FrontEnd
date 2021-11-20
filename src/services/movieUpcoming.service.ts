import { http } from "./fetch.service";

export const movieUpcomingService = (page = 1) => {
  return http.get("/movie/upcoming", {
    params: {
      page,
    },
  });
};
