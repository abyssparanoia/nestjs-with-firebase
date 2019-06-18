## Description

_nestjs-with-firebase_ is backend API server built in nestjs and firebase authentication

## Installation

```bash
$ npm install
```

## Running the app in container

```bash
#build
$ docker-compose build

# up with hot reload
$ docker-compose up -d
```

## Migration

```bash
# generate migration
$ docker-compose run --rm api sh -c 'npm run migrate:generate'

# run migrate
$ docker-compose run --rm api sh -c 'npm run migrate:run'
```

## Running the app in local

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
