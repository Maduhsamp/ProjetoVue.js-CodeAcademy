import axios from "axios";

const HttpService = axios.create({
  baseURL: "https://api.jikan.moe/v4/",
  headers: {
    "Content-type": "application/json",
  },
});
//https://api.jikan.moe/v4/genres/anime
export const getGenres = async () => {
  return await HttpService.get('genres/anime')
}

export const getInfoAnime = async (id) => {
  return await HttpService.get(`anime/${id}/full`)
}
