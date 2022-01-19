<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Uma APIRest consumindo a [PokeApi](https://pokeapi.co/), com CRUD de pokemons e autentificação JWT


- Consuma o endpont GET http://localhost:3000/pokemons/ para listar os pokemons criados.
- Consuma o endpont POST http://localhost:3000/pokemons/ para criar um pokemon.
- Consuma o endpont GET http://localhost:3000/pokemons/:id para pegar um pokemons pelo ID.
- Consuma o endpont PATCH http://localhost:3000/pokemons/:id para alterar algum atributo do pokemon pelo ID.
- Consuma o endpont DELETE http://localhost:3000/pokemons/ para deletar um pokemon pelo ID.
- Consuma o endpont GET http://localhost:3000/pokemons/list/:page para listar 10 pokemons da PokeAPi por página.
- Consuma o endpont GET http://localhost:3000/pokemons/list/pokemon/:id para pegar um pokemons pelo ID.
- Consuma o endpont POST http://localhost:3000/pokemons/users/ para cadastrar um usuario.
- Consuma o endpont POST http://localhost:3000/pokemons/users/singin/ para logar e receber o token para ter acesso as outras rotas.
- O login é passado na body em urlencoded com o username e password
- Expiração do token em 60 segundos
- Token é passado na Authorization como Bearer Token

## Instalação

```bash
$ npm install
```

## Rodando o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Teste

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Contato

  [Linkedin](https://www.linkedin.com/in/brunomicalli/)

  Feito por <strong>Bruno Micalli</strong> 😊

