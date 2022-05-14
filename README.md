# Getting started

## 1. Installing dependencies.

We're using [pnpm](https://pnpm.io/) as a package manager so install it first:

```bash
npm install -g pnpm
```

After that you can install all dependencies by using this command in the root folder:

```bash
pnpm install
```

## 2. Adding .env files

You need to create two .env files.
First one should be placed in the root directory in contain variables for Database to start:
```dotenv
POSTGRES_PASSWORD=password
POSTGRES_DB=kite
POSTGRES_USER=kite
```
Second one should be placed in `/apps/clinet` and contain following values:
```dotenv
GOOGLE_ID=ID # Google ID from google dev console
GOOGLE_SECRET=Secret # Google Secret from google dev console
NEXTAUTH_SECRET=Secret2 # Random string
DATABASE_URL=postgresql://kite:password@localhost:5432/kite?schema=public # database connection url
NEXT_PUBLIC_SERVER_URL=http://localhost:3000 # local server url
```

## 3. Start the database

Run this command from inside the root to start a container with a database.

```bash
docker-compose up
```

## 4. Start the app

Finally run the application itself. Go to `apps/client` and run:
```bash
npm run dev
```
