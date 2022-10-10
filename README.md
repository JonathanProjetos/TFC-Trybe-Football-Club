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

> Libs: nodemon, eslint, express-async-errors, dotenv, joi, jsonwebtoken, mysql2, sequelize-cli, cors, jest, mocha, chai, sinon.

## Detalhes da Rota

#### Verbo Post : /login

##### Esperado
 - O corpo da requisição deverá seguir o formato abaixo:
 ```json
{
  "email": admin@admin.com
  "password": "secret_admin"
}
 ```
- Se o login foi feito com sucesso, o resultado retornado deverá ser similar ao exibido abaixo, com um status http 200
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc" 
}
```
### Verbo Get : /login/validate

##### Esperado

 - A rota responde com um body contendo a role da pessoa logada.
 
 ```json
  { "role": "admin" }
 ```
 ### Verbo Get : /teams

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
 ### Verbo Get : /teams/:id

##### Esperado

 - A rota responderá com este formato e status http 200.
 
```json
   {
     "id": 1,
     "teamName": "Avaí/Kindermann"
   }
```
 ### Verbo Get : /matches

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
 ### Verbo Post : /matches

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
