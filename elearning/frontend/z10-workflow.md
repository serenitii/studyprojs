
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
[README.md](../../README.md)

```sh
 pnpm add zustand -w
```

**react-query**

[docs]()

[lecture-note](https://lopunko.notion.site/React-Query-1caa346f20fa802aa7a0d8ffcef30244)

```sh 
pnpm add @tanstack/react-query -w
pnpm add @tanstack/react-query-devtools -w
```


**nestjs**

[lecture-note](https://lopunko.notion.site/NestJS-NestJS-1d8a346f20fa804ea50ef2e136f36797?pvs=4)

[IoC, DI](https://lopunko.notion.site/NestJS-IoC-Inversion-of-Control-DI-Dependency-Injection-1d8a346f20fa808cb259f30f9811061f?pvs=4)

[nestjs 구조](https://lopunko.notion.site/NestJS-NestJS-Module-Controller-Service-1d8a346f20fa8011974fc7d9c6647640?pvs=4)



