import { env } from "@/env";
import axios from "axios";

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  // faz com que os cookies do front end sejam enviados automaticamente, o que nao é feito por padrão
  withCredentials: true,
});

if (env.VITE_ENABLE_API_DELAY) {
  /* 
    Variavel de ambiente que caso esteja true , ela faz com que a requisição tenha um delay
  
    Antes de todas as funcoes do axios, os interceptors sao chamados.
    Isso é para caso queira atrasar a requisicao para tratar questoes de loading
    Isso é para gerar um delay de 2000 milisegundos

   */
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(() => resolve, 2000));

    return config;
  });
}
