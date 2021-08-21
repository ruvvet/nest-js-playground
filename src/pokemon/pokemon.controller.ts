import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  @Get() // type of call
  getOGPokemon() {
    // what happens when you call this route
    return 'POKEMON ZONE';
    // const result = await PokemonService.getPokemon();
  }

  @Get('/:pokename/:id') // using params
  getPokemonInfo(@Param() params): string {
    console.log(params);
    // gives an object where the param identifier is the key and the param is the value
    return params.pokename;
  }

  // BUT WE CAN DESTRUCT THE PARAMS TO BE MORE READABLE
  @Get('/:pokename/:id/:thing') // using params
  getPokemonInfo2(
    @Param('pokename') pokename: string,
    @Param('id') id: string,
    @Param('thing') thing: string,
  ) {
    // gives an object where the param identifier is the key and the param is the value
    return `${pokename} and ${id} and ${thing}`;
  }

  @Get('filter')
  getPokemonByFilter(@Query('pokemon') pokemon: string) {
    return pokemon;
  }
}
