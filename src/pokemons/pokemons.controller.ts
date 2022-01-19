import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PokemonsService } from './pokemons.service';

import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonsService.create(createPokemonDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.pokemonsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonsService.update(+id, updatePokemonDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonsService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/list/:page')
  findAllPokemonList(@Param('page') page: number) {
    return this.pokemonsService.findPokemonList(page);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/list/pokemon/:id')
  findAllPokemonListById(@Param('id') id: number) {
    return this.pokemonsService.findPokemonListById(id);
  }
}
