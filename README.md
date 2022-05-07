# Getting started

## 1. Installing dependencies

We're using [pnpm](https://pnpm.io/) as a package manager so install it first:

```bash
npm install -g pnpm
```

After that you can install all dependencies via

```bash
pnpm install
```

## 2. Adding .env file

Create new .env file from .env.example and fill it with actual values for variables.

## 3. Start the database

Run this command from inside the folder to start a container with a database.

```bash
docker-compose up
```

## 4. Start the app

Finally run the application itself:

```bash
npm run dev
```
