# online-learning-platform

Before run app, you need to config .env first, look the .env.example careful

## Install

```sh
$ yarn install
```

## Run app

```sh
$ yarn dev
```

## Migrate

Run migration

```sh
$ yarn migrate
```

Rollback migration

```sh
$ yarn migrate:rollback all
```

Run seeder

```sh
$ yarn seed:run
```

## Deploy to heroku

you can deploy this project on Heroku

### Setup project

1. first you need to create the project on Heroku
2. open deploy menu and connect Heroku project to your Github repository, you can setup to automatic deploy

### Install clearDB

run this command in heroku CLI

1. install clearDB

```sh
heroku addons:create cleardb:ignite --app HEROKU-PROJECT-NAME
```

2. go to setting and find and click Reveal Config Vars
3. copy CLEARDB_DATABASE_URL value example

```sh
mysql://b0fbba217abab5:e0da1e09@us-cdbr-east-04.cleardb.com/heroku_a2f2621e8aa1a36?reconnect=true
```

4. add another config vars

```sh
DB_CLIENT="mysql2"
DB_HOST=us-cdbr-east-04.cleardb.com
DB_USER=b0fbba217abab5
DB_PASSWORD=e0da1e09
DB_NAME=heroku_a2f2621e8aa1a36
TOKEN_SECRET=rahasia

MIGRATION_DIR=database/migration
SEEDS_DIR=database/seed

CLOUDINARY_NAME=dwfi257wp
CLOUDINARY_API_KEY=642266691754991
CLOUDINARY_API_SECRET=qXygtNsNZ5Tw394AKow7ykk2Pco
```
