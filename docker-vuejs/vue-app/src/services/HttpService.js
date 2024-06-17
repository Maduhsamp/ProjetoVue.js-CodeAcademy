import axios from "axios";

const HttpService = axios.create({
  baseURL: "https://api.jikan.moe/v4/",
  headers: {
    "Content-type": "application/json",
  },
});

//https://api.jikan.moe/v4/genres/anime -> URL BASE

export const getGenres = async () => {
  return await HttpService.get('genres/anime')
}
//Card Component Filtrado por Genero e limite de 
export const getTopFiveGenre = async (idGenre,limite) => {
  return await HttpService.get(`anime?page=1&limit=${limite}&genres=${idGenre}&order_by=popularity`)
}
//Cards Mais populares
export const getMostPopular = async () => {
  return await HttpService.get('top/anime?limit=5&filter=bypopularity')
}
//Card Mais avaliados
export const getMostAiring = async () => {
  return await HttpService.get('top/anime?filter=airing&type=tv&limit=5')
}
export const getUpcoming = async() => {
  return await HttpService.get('top/anime?filter=upcoming&type=tv&limit=5')
}
//info dos animes
export const getAnime = async () => {
  return await HttpService.get('anime');
}

export const getAnimes = async (id) => {
  return await HttpService.get(`anime/${id}`);
}

export const getInfoAnime = async (id) => {
  return await HttpService.get(`anime/${id}/full`)
}
