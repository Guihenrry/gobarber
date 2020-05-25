<h1 align="center">
  <img alt="GoBarber" src="../.github/logo.png" width="250px" />
</h1>

<h3 align="center">
  API REST Node.js para o aplicativo GoBarber
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Guihenrry/gobarber?color=%23FF9000">

  <a href="https://www.linkedin.com/in/guilhermehenrry/">
    <img alt="Made by Gui Henrry" src="https://img.shields.io/badge/made%20by-Gui%20Henrry-%23FF9000">
  </a>

  <img alt="License" src="https://img.shields.io/badge/licence-MIT-%23FF9000">
</p>


[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=GoBarber%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2FGuihenrry%2Fgobarber%2Fmaster%2Fbackend%2Finsomnia.json)

# :pushpin: Índice

- [Sobre o projeto](#:information_source-sobre-o-projeto)
- [Tecnologias](#rocket-tecnologias)
- [Como utilizar](#construction_worker-como-utilizar)

# :information_source: Sobre o projeto
Aplicação para agendamentos de serviços para barbearia. Este repositorio contém aplicação completa backend, web e mobile. Para conhecer as funcionalidades e como execultar em outros ambientes [clique aqui](https://github.com/Guihenrry/gobarber).

# :rocket: Tecnologias

Algumas tecnologias e ferramentas utilizadas.

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [JWT-token](https://jwt.io/)
- [Jest](https://jestjs.io/)
- [Celebrate](https://github.com/arb/celebrate)
- [Eslint](https://eslint.org/) + [Prettier](https://prettier.io/) + [EditorConfig](https://editorconfig.org/)


# :construction_worker: Como utilizar

**OBS:** Para utilizar este projeto será necessário banco de dados postgres, redis e mongodb. No passo a passo a seguir estarei utilizando [Docker](https://www.docker.com/products/docker-desktop) para criação das instâncias do banco de dados.

```bash
# Instalar as dependencias
$ yarn

# Copiar o arquivo '.env.example' para '.env'
# e definir suas variaveis de ambiente.
$ cp .env.example .env

# Criar uma instância do postgreSQL utilizando docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Criar uma instância do mongoDB utilizando docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Criar uma instância do redis utilizando docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Copiar o arquivo 'ormconfig.example.json' para 'ormconfig.json'
# e definir suas variaveis de conexão do postgreSQL e mongoDB.
$ cp ormconfig.example.json ormconfig.json

# Com o banco de dados execução
# execultar as migrations para criar a estutura do banco de dados
$ yarn typeorm migration:run

# Por fim, execute o projeto na porta 3333
$ yarn dev:server
```


---

Feito com 🧡 by [Gui Henrry](https://www.linkedin.com/in/guilhermehenrry/) ✌
