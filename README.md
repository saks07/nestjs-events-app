# NestJS backend application

Events application made with NestJS + PostgreSQL database

## Dependencies

- NodeJS v22.40
- npm v10.8.1
- NestJS v10.0.0
- PostgreSQL 17

## Project setup

- Install PostgreSQL service on your local machine and run database service

- Create database

`CREATE DATABASE db_name ENCODING UTF-8;`

- Install dependencies by running

```bash
$ npm install
```

- Create a .env file and update environment database and third-party services variables

```bash
$ cp .env.example .env
```

```
!!! IMPORTANT: Do not forget to set ENV variables which will allow NestJS application to receive requests from VueJS application !!!

ACCESS_CONTROL_ALLOW_ORIGIN=vue_app_host_value

ACCESS_CONTROL_ALLOW_METHODS=GET, POST, PATCH, DELETE
```

- Run NestJS application which will start the application and setup the events table in your database

```bash
$ npm start
```
