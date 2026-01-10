
## brief

- source: [인프런 클론코딩 Part 1](https://www.inflearn.com/course/%EC%9D%B8%ED%94%84%EB%9F%B0-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-part1/dashboard)
- frameworks & libraries
  * nextjs, zustand, 
  * nestjs, postgresql

## flow

**프로젝트 생성** 

```shell
pnpm create next-app@latest elearning-nextapp
```

**prettier configurations** (in package.json)

```sh 
pnpm add -D prettier -w 
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

**tailwindcss**

[tailwind play](https://play.tailwindcss.com/)

[lecture-note](https://lopunko.notion.site/Tailwindcss-1caa346f20fa804eb6d9c5a4ca563094)


**zustand**

```sh[README.md](../../README.md)
 pnpm add zustand -w
```

**react-query**

[lecture-note](https://lopunko.notion.site/React-Query-1caa346f20fa802aa7a0d8ffcef30244)

```sh 
pnpm add @tanstack/react-query -w
```



