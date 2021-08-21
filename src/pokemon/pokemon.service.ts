import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PokemonService {
  async get20Pokemon() {
    const response = await axios({
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon',
    });

    if (!response) {
      return 'error';
    }
    return response.data;
  }

  async getPokemonByName(pokename: string) {
    const response = await axios({
      method: 'get',
      url: `https://pokeapi.co/api/v2/pokemon/${pokename}`,
    });

    if (!response) {
      return 'error';
    }
    return response.data;
  }

  async getPokemonByFilter(type: string, id: string) {
    const response = await axios({
      method: 'get',
      url: `https://pokeapi.co/api/v2/${type}/${id}`,
    });

    if (!response) {
      return 'error';
    }
    return response.data;
  }
}
