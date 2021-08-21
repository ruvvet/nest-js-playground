import {
  Controller,
  Get,
  HttpCode,
  Param,
  Query,
  Redirect,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}
  // define services as argument that are passed into the class constructor
  // nest then uses this somehow
  // and then all class methods have access to it

  @Get('basic') // type of call + any additional route prefix
  getBasic() {
    // what happens when you call this route
    return 'POKEMON ZONE';
  }

  @Get('param/:pokename/:id') // using params
  getParams(@Param() params): string {
    console.log(params);
    // gives an object where the param identifier is the key and the param is the value
    return params.pokename;
  }

  // BUT WE CAN PASS IN SPECIFIC TOKENS SO WE CAN REFERENCE THEM EXPLICITLY
  @Get('param/:pokename/:id/:thing') // using params
  getParamsSpecific(
    @Param('pokename') pokename: string,
    @Param('id') id: string,
    @Param('thing') thing: string,
  ) {
    // gives an object where the param identifier is the key and the param is the value
    return `${pokename} and ${id} and ${thing}`;
  }

  @Get('query') // using query params
  getQuery(@Query() query: any) {
    // returns an object of all query values
    console.log(query);
    return query;
  }

  // BUT AGAIN PASS IN SPECIFIC TOKENS SO WE CAN REFERENCE THEM EXPLICITLY
  @Get('query2')
  getQuerySpecific(@Query('pokemon') pokemon: string) {
    console.log(pokemon);
    return pokemon;
  }

  //TODO: i dont get how this http code thing works
  @Get('httpcode')
  @HttpCode(204)
  getHttp() {
    return '...';
  }

  @Get('red*rect')
  @Redirect('https://www.google.com', 301)
  getRedirect() {
    return null;
  }

  @Get()
  async get20Pokemon() {
    const result = await this.pokemonService.get20Pokemon();
    return result;
  }

  @Get('search/:pokename')
  async getPokemonByName(@Param('pokename') pokename: string) {
    const result = await this.pokemonService.getPokemonByName(pokename);
    return result;
  }

  @Get('filter')
  async getPokemonByFilter(
    @Query('type') type: string,
    @Query('id') id: string,
  ) {
    const result = await this.pokemonService.getPokemonByFilter(type, id);
    return result;
  }
}
