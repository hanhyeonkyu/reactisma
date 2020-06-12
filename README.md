# REACTISMA ( REACT + PRISMA )

## PRISMA

### OVERVIEW

1. INSTALLATION
2. FUNCTION

#### INSTALLATION

1. `npm init -y`
2. `npm i @prisma/cli typescript ts-node @types/node --save-dev`
3. create `tsconfig.json`

```typescript
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}
```

4. `npx prisma`
5. `npx prisma init`
6. modify `.env`

```.env
mysql://USER:PASSWORD@HOST:PORT/DATABASE
```

7. create database and table
8. npx prisma introspect
   ![prisma-introspect](prisma/assets/prisma-introspect.png)
9. `npm i @prisma/client`
10. `npx prisma generate`

#### FUNCTION

- RUN
  1. create `index.ts`
  ```typescript
  import { PrismaClient } from "@prisma/client";
  const prisma = new PrismaClient();
  async function main() {
    // ... you will write your Prisma Client queries here
  }
  main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.disconnect();
    });
  ```
- GET

  1. insert get function

  ```typescript
  async function main() {
    const allTests = await prisma.test.findMany();
    console.log(allTests);
  }
  ```

  2. `npx ts-node index.ts`

- POST
  1. insert post function
  ```typescript
  async function main() {
    await prisma.user.create({
      data: {
        name: "Alice",
        email: "alice@prisma.io",
        posts: {
          create: { title: "Hello World" },
        },
        profile: {
          create: { bio: "I like turtles" },
        },
      },
    });
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });
    console.dir(allUsers, { depth: null });
  }
  ```
  2. create new user with new post and profile using nested write query
  3. `npx ts-node index.ts`
- PUT

  1. insert update query

  ```typescript
  async function main() {
    const post = await prisma.post.update({
      where: { id: 1 },
      data: { published: true },
    });
    console.log(post);
  }
  ```

  2. `npx ts-node index.ts`

- DELETE

  1. insert delete query

  ```typescript
  await prisma.user.delete({
    where: { email: "sarah@prisma.io" },
  });
  ```

  2. `npx ts-node index.ts`

- Explore the data in Prisma Studio

  -> `npx prisma studio --experimental` (can change data in the browser)

![prisma-introspect](prisma/assets/prisma-concept.png)

## REACT

### OVERVIEW
