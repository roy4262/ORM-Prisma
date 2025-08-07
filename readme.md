# ORM Prisma Setup Guide

## Code Formatting

- Format code in VS Code: `Shift + Alt + F`

## Project Initialization

```bash
npm init -y
```

- Name your project `orm-prisma` and move into the directory.

## TypeScript Setup

```bash
npm i typescript
npx tsx --init
```

- In `tsconfig.json`, set:
  - `"rootDir"` to `src`
  - `"outDir"` to `dist` (or your choice)

## Development Script

Add to `package.json`:

```json
"scripts": {
  "dev": "tsx -b && node ./dist/index.js"
}
```

Run the development server:

```bash
npm run dev
```

---

## Prisma Setup

```bash
npx prisma init
```

- Add your database URL to `.env`
- Define your models in `schema.prisma`

## Database Migration & Client Generation

```bash
npx prisma migrate dev
# Name your migration; it will be stored in the migrations folder

npx prisma generate
```

## Create Prisma Client Instance

```js
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
```

## CRUD Operations with Prisma Client

```js
client.todo.create(); // Create one record
client.todo.createMany(); // Create multiple records
client.todo.findMany(); // Find all records
client.todo.findUnique(); // Find one specific record
client.todo.findFirst(); // Find first matching record
client.todo.update(); // Update a record
client.todo.updateMany(); // Update multiple records
client.todo.delete(); // Delete a record
client.todo.deleteMany(); // Delete multiple records
client.todo.upsert(); // Update or create
```
