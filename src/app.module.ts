import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonsModule } from './pokemons/pokemons.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Pokemon } from './pokemons/entities/pokemon.entity';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    PokemonsModule,
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'db_poke',
      entities: [Pokemon, User],

      synchronize: true,
    }),
  ],
})
export class AppModule {}
