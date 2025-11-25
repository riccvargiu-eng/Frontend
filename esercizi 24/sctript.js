import { API_KEY } from "./11/keys.js";
const url = "https://api.themoviedb.org/3/tv/popular?language=it-IT&page=100";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: API_KEY,
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));
