
## brief

- source: [인프런 클론코딩 Part 1](https://www.inflearn.com/course/%EC%9D%B8%ED%94%84%EB%9F%B0-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-part1/dashboard)
- frameworks & libraries
    * nextjs, zustand,
    * nestjs, postgresql

## flow 

[create a shadcn/ui project](https://ui.shadcn.com/docs/installation)

**prettier configurations** (in package.json)

```sh 
pnpm add -D prettier 
```

```json
{
  "prettier": {
    "singleQuote": true,
    "trailingComma": "all",
    "semi": false,
    "printWidth": 120
  }
} 
```

**

**zustand**

[README.md](../../README.md)

```sh
pnpm add zustand
```

**react-query**

[docs]()

[lecture-note](https://lopunko.notion.site/React-Query-1caa346f20fa802aa7a0d8ffcef30244)

```sh 
pnpm add @tanstack/react-query
pnpm add @tanstack/react-query-devtools
```

**auth.js**

[lecture](https://lopunko.notion.site/FE-BE-Auth-js-Prisma-Bugfix-Auth-js-Prisma-1cca346f20fa8017a446d6a2d7c65cbf
[docs](https://authjs.dev/getting-started/installation?framework=Next.js)

```sh 
pnpm add next-auth@beta

pnpm dlx auth secret
```

**prisma on nextjs**

[docs](https://www.prisma.io/docs/guides/nextjs)

```sh
pnpm add prisma tsx @types/pg --save-dev
pnpm add @prisma/client @prisma/adapter-pg dotenv pg  
```

```sh 
pnpm prisma init
```

```sh
pnpm prisma generate 
```

add the following code to your lib/prisma.ts file: lib/prisma.ts
```ts
import { PrismaClient } from '../app/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const globalForPrisma = global as unknown as {
  prisma: PrismaClient
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = globalForPrisma.prisma || new PrismaClient({
  adapter,
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma 
```


```sh
#pnpm add @prisma/client @prisma/extension-accelerate @auth/prisma-adapter

#pnpm add prisma --save-dev  
```

