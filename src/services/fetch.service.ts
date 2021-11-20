import axios from "axios";
import config from "../config";

const http = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: config.apiKey,
    language: config.language,
  },
});

export { http };
