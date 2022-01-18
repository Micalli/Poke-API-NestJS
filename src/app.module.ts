import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonsModule } from './pokemons.module';

@Module({
  imports: [
    PokemonsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'db_poke',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],

      synchronize: true,
    }),
  ],
})
export class AppModule {}
