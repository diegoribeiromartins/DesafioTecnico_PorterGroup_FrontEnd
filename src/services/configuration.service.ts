import { http } from "./fetch.service";

export const configurationService = () => {
  return http.get("/configuration");
};
