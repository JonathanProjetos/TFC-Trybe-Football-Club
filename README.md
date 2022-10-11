# Trybe Football Club

# Contexto

TFC é um site informativo sobre partidas e classificações de times de futebol! ⚽️. O objetivo deste desafio é desenvolver uma API utilizando modelagem de dados através do Sequelize para ser consumida pelo front que já está completamente implementado. O acesso aos end-points, segue os princípios REST. Para acessar alguns endereços vinculados a usuário é necessário fazer autenticação e quando autenticado a API responderá trazendo um token no corpo da requisição. O token deverá ser inserido no cabeçalho de cada requisição privada, com o intuito de autenticação.

## preview

 ![Exemplo app front](app/frontend/image/2022-10-10_10-14.png)

## Importante:

- E aconselhável o uso de softwares de envio de requisições REST como:
- [Insomia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)
- [Httpie](https://httpie.io/)

## Técnologias utilizadas

> Desenvolvido em nodejs.

> Linguagem: Typescript.

> ORM : Sequelize

> Framework utilizado: Express.

> Libs: nodemon, eslint, express-async-errors, dotenv, joi, jsonwebtoken, mysql2, sequelize-cli, cors, jest, mocha, chai, sinon, bycrptjs.

## Detalhes da Rota

#### Verbo POST : /login

##### Esperado
 - O corpo da requisição deverá seguir o formato abaixo:
 ```json
{
  "email": "admin@admin.com"
  "password": "secret_admin"
}
 ```
- Se o login foi feito com sucesso, o resultado retornado deverá ser similar ao exibido abaixo, com um status http 200
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc" 
}
```
### Verbo GET : /login/validate

##### Esperado

 - A rota responde com um body contendo a role da pessoa logada.
 
 ```json
  { "role": "admin" }
 ```
### Verbo GET : /teams

##### Esperado

 - A rota responderá com este formato e status http 200.
 
```json
  [
   {
     "id": 1,
     "teamName": "Avaí/Kindermann"
   },
   {
     "id": 2,
     "teamName": "Bahia"
   },
   ...
```
### Verbo GET : /teams/:id

##### Esperado

 - A rota responderá com este formato e status http 200.
 
```json
   {
     "id": 1,
     "teamName": "Avaí/Kindermann"
   }
```
### Verbo GET : /matches

##### Esperado

 - A rota responderá com este formato e status http 200.
 
```json
[
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 1,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "São Paulo"
    },
    "teamAway": {
      "teamName": "Grêmio"
    }
  },
  ...
```
### Verbo POST : /matches

##### Esperado

 - O corpo da requisição deverá seguir o formato abaixo.
 
```json
{
  "homeTeam": 16,
  "awayTeam": 8,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
  "inProgress": true 
}
```
- A rota responde com um body contendo este formato e status http 201.

```json
{
  "id": 1,
  "homeTeam": 16,
  "homeTeamGoals": 2,
  "awayTeam": 8,
  "awayTeamGoals": 2,
  "inProgress": true,
}
```
### Verbo PATCH : /matches/:id/finish

##### Esperado

 - A rota deve receber um id é responderá com um body neste formato.
 
```json
{ "message": "Finished" }
```
- objetivo deste end-point e atualizar o status da partida de "Em andamento" para "Finalizada".

### Verbo PATCH : /matches/:id

##### Esperado

 - A rota deve receber um id é responderá com um body neste formato.
 
```json
{
  "homeTeamGoals": 3,
  "awayTeamGoals": 1
}

```
- A rota responderá com este formato e status http 200.
```json
{ "message" : "Partida atualizada"}
```
### Verbo GET : /leaderboard/home

##### Esperado

- A rota responderá com este formato e status http 200.
```json
[
  {
    "name": "Santos",
    "totalPoints": 9,
    "totalGames": 3,
    "totalVictories": 3,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 9,
    "goalsOwn": 3,
    "goalsBalance": 6,
    "efficiency": "100.00"
  },
  {
    "name": "Palmeiras",
    "totalPoints": 7,
    "totalGames": 3,
    "totalVictories": 2,
    "totalDraws": 1,
    "totalLosses": 0,
    "goalsFavor": 10,
    "goalsOwn": 5,
    "goalsBalance": 5,
    "efficiency": "77.78"
  },
```
### Verbo GET : /leaderboard/away

##### Esperado

- A rota responderá com este formato e status http 200.
```json
[
  {
    "name": "Palmeiras",
    "totalPoints": 6,
    "totalGames": 2,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 7,
    "goalsOwn": 0,
    "goalsBalance": 7,
    "efficiency": "100.00"
  },
  {
    "name": "Corinthians",
    "totalPoints": 6,
    "totalGames": 3,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 1,
    "goalsFavor": 6,
    "goalsOwn": 2,
    "goalsBalance": 4,
    "efficiency": "66.67"
  },
```
### Verbo GET : /leaderboard

##### Esperado

- A rota responderá com este formato e status http 200.
```json
[
  {
    "name": "Palmeiras",
    "totalPoints": 6,
    "totalGames": 2,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 7,
    "goalsOwn": 0,
    "goalsBalance": 7,
    "efficiency": "100.00"
  },
  {
    "name": "Corinthians",
    "totalPoints": 6,
    "totalGames": 3,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 1,
    "goalsFavor": 6,
    "goalsOwn": 2,
    "goalsBalance": 4,
    "efficiency": "66.67"
  },
```
## Instalando Dependências

## Docker
```
cd TFC-Trybe-Football-Club/app/backend
npm install
cd ..
cd frontend
npm install
cd ..
cd ..
npm install
npm run compose:up:dev
docker logs --tail 1000 -f app_backend
docker exec -it app_backend bash
Se todos os passos forem feitos com sucesso o front também estará disponível.
```
## Sem o docker
```
cd TFC-Trybe-Football-Club/app/backend
npm install
cd ..
cd frontend
npm install
cd ..
cd ..
npm install
npm run compose:up:dev
```
## Test
```bash
cd TFC-Trybe-Football-Club/app/backend
npm run test:coverage
- Foi implementado test de integração que cobre 89% das linhas.
```

## Aviso Importante 
Caso queira roda a aplicação via docker deverá ter o docker instalado no dispositivo, caso não esteja instalado você pode encontra como instalar neste [link](https://docs.docker.com/engine/install/ubuntu/) site oficial
