
## Brief

- nextjs + shadcn/ui + authjs + prisma + postgresql
- [ref tutorial](https://youtu.be/k-wTsBLiVLg)


## setup flow

next.js + shadcn/ui 프로젝트 생성  

```sh
pnpm dlx shadcn@latest create 
```

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

**auth.js**

[docs](https://authjs.dev/getting-started/installation)

```sh 
pnpm add next-auth@beta
pnpm dlx auth secret
```
