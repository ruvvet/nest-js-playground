import { Injectable } from '@nestjs/common';

@Injectable()
export class PokemonService {
  async getPokemon() {
    const pokemon = await fetch('https://pokeapi.co/api/v2/');
    if (!pokemon) {
      return 'error';
    }
    return pokemon.json();
  }
}
