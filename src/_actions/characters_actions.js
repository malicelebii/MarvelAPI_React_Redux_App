import axios from 'axios';
import {
   GET_CHARACTERS,
   GET_ONE_CHARACTER,
   GET_COMICS
} from './types';
import { API_SERVER } from '../configs/keys.js';
import { API_KEY } from '../configs/keys.js';

export function getCharacters(limit){
    const characters = axios.get(`${API_SERVER}/v1/public/characters?limit=${limit}&apikey=${API_KEY}`)
        .then(response => response.data);
    
    return {
        type: GET_CHARACTERS,
        payload: characters
    }
}

export function getOneCharacters(id){
    const character = axios.get(`${API_SERVER}/v1/public/characters/${id}?apikey=${API_KEY}`)
        .then(response => response.data);
    
    return {
        type: GET_ONE_CHARACTER,
        payload: character
    }
}

export function getComics(id,limit){
    const comics = axios.get(`${API_SERVER}/v1/public/characters/${id}/comics?limit=${limit}&apikey=${API_KEY}`)
        .then(response => response.data);
    
    return {
        type: GET_COMICS,
        payload: comics
    }
}