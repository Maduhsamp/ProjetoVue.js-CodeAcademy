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
//genero Action
export const getInfoAction = async () => {
  return await HttpService.get('genres/anime/data/1/')
}

export const getTopFiveGenre = async (idGenre,limite) => {
  return await HttpService.get(`anime?page=1&limit=${limite}&genres=${idGenre}&order_by=popularity`)
  //https://api.jikan.moe/v4/anime?page=1&limit=5&genres=1&order_by=members
  //https://api.jikan.moe/v4/anime?page=1&limit=5&order_by=popularity&genres=1
}
//genero Adventure
export const getInfoAdventure= async () => {
  return await HttpService.get('genres/anime/data/2/')
}
//genero Comedy
export const getInfoComedy= async () => {
  return await HttpService.get('genres/anime/data/4/')
}
//genero Fantasy
export const getInfoFantasy= async () => {
  return await HttpService.get('genres/anime/data/10/')
}
//genero Romance
export const getInfoRomance= async () => {
  return await HttpService.get('genres/anime/data/22/')
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
