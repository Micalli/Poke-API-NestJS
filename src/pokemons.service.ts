import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePokemonDto } from './pokemons/dto/create-pokemon.dto';
import { UpdatePokemonDto } from './pokemons/dto/update-pokemon.dto';
import { Pokemon } from './pokemons/entities/pokemon.entity';

import fetch from 'node-fetch';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonsRepository: Repository<Pokemon>,
  ) {}
  async create(createPokemonDto: CreatePokemonDto) {
    const pokemons = await this.pokemonsRepository.create(createPokemonDto);
    await this.pokemonsRepository.save(pokemons);
    return pokemons;
  }

  findAll() {
    return this.pokemonsRepository.find();
  }

  findOne(id: number): Promise<Pokemon> {
    return this.pokemonsRepository.findOne(id);
  }

  async update(id: number, post: UpdatePokemonDto) {
    await this.pokemonsRepository.update(id, post);
    const updatePokemon = await this.pokemonsRepository.findOne(id);
    if (updatePokemon) {
      return updatePokemon;
    }

    throw new HttpException('Pokemon not found', HttpStatus.NOT_FOUND);
  }

  async remove(id: number) {
    const deletedPokemon = await this.pokemonsRepository.delete(id);
    if (!deletedPokemon.affected) {
      throw new HttpException('Pokemon não encontrado', HttpStatus.NOT_FOUND);
    } else {
      throw new HttpException('Pokemon deletado', HttpStatus.OK);
    }
  }

  async findPokemonList(page) {
    const perPage = 10;
    const offset = page * perPage - perPage;

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`,
    );
    const data = await response.json();
    return data.results;
  }

  async findPokemonListById(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
  }
}
