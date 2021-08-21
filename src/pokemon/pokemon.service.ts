import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PokemonService {
  async getPokemon() {
    const response = await axios({
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon',
    });

    if (!response) {
      return 'error';
    }
    return response.data;
  }
}
