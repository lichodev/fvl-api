<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
  </a>
  <a href="https://exa.unicen.edu.ar" target="blank">
    <img src="https://exa.unicen.edu.ar/wp-content/uploads/2021/03/u249.png" width="200" alt="FCEx Logo" />
  </a>
</p>

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Endpoints

### Matchs

`GET /matchs`

Retrieve all Matchs.

- Query parameters
  - `populate`: Boolean. Example: `GET /matchs?populate=true`
- Response

  ```js
  [
    {
      id: 'number',
      // If populate truthy, sends team object instead of id
      local: 'Team | number',
      visitante: 'Team | number',
      sets_local: 'number',
      sets_visitante: 'number',
    },
    // ...
  ];
  ```

`GET /matchs/:id`

Retrieve a single Match data, including teams objects.

- Response:

  ```json
  {
    "id": "number",
    "local": "Team",
    "visitante": "Team",
    "sets_local": "number",
    "sets_visitante": "number"
  }
  ```

`POST /matchs/`

Creates a new Match. "Local" and "Visitante" are Team's ID.

- Request body:

  ```json
  {
    "local": "number",
    "visitante": "number",
    "sets_local": "number",
    "sets_visitante": "number"
  }
  ```

- Response:

  ```json
  {
    "id": "number",
    "local": "number",
    "visitante": "number",
    "sets_local": "number",
    "sets_visitante": "number"
  }
  ```

`PUT /matchs/:id`

Updates an existing Match

- Request body:

  ```json
  {
    "local": "number",
    "visitante": "number",
    "sets_local": "number",
    "sets_visitante": "number"
  }
  ```

- Response:

  ```json
  {
    "id": "number",
    "local": "number",
    "visitante": "number",
    "sets_local": "number",
    "sets_visitante": "number"
  }
  ```

`DELETE /matchs/:id`

Deletes an existing Match. If successful, no response is sent.

### Teams

`GET /teams`

Retrieve all teams.

- Response

  ```js
  [
    {
      id: 'number',
      name: 'string',
      short_name: 'string',
      country: 'string',
      location: 'string',
    },
    // ...
  ];
  ```

`GET /teams/:id`

Retrieve a single Team data, including an array with Matchs played.

- Response:

  ```json
  {
    "id": "number",
    "name": "string",
    "short_name": "string",
    "country": "string",
    "location": "string",
    "matchs": "Match[]"
  }
  ```

`POST /teams/`

Creates a new Team

- Request body:

  ```json
  {
    "name": "string",
    "short_name": "string",
    "country": "string",
    "location": "string"
  }
  ```

- Response:

  ```json
  {
    "id": "number",
    "name": "string",
    "short_name": "string",
    "country": "string",
    "location": "string"
  }
  ```

`PUT /teams/:id`

Updates an existing Team

- Request body:

  ```json
  {
    "name": "string",
    "short_name": "string",
    "country": "string",
    "location": "string"
  }
  ```

- Response:

  ```json
  {
    "id": "number",
    "name": "string",
    "short_name": "string",
    "country": "string",
    "location": "string"
  }
  ```

`DELETE /teams/:id`

Deletes an existing Team. If successful, no response is sent.

## License

Nest is [MIT licensed](LICENSE).
