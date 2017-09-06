# koa-graph-mongo

Koa server is a open-source GraphQL server.

It is built on top of the Node.js, koa, GraphQL, mongoDB, redis.

## Getting Started

```bash
npm install: install dependencies

npm start: run server

# when you keeping server running at port 4001
npm run build.doc: generate static GraphQL doc
```

## Directory Structure

```
├── src
│   ├── db
│   │   ├── config.ts # mongoDB config
│   │   └── index.ts # connect to mongoDB
│   │
│   ├── server
│   │   ├── controller # DB controller
│   │   │   ├── demo # demo controller
│   │   │   ├── ···
│   │   │   └── index.ts # export controller
│   │   ├── graphql
│   │   │   ├── demo # demo graphql
│   │   │   │   ├── DemoMutation.ts # Demo mutation
│   │   │   │   ├── DemoQuery.ts # Demo Query
│   │   │   │   ├── DemoType.ts # Demo Type
│   │   │   │   └── index.ts # export demo graphql config
│   │   │   ├── ···
│   │   │   └── index.ts # export graphql schema
│   │   ├── middleware
│   │   │   └── index.ts # server middleware config
│   │   ├── model # mongoDB model
│   │   │   ├── todo
│   │   │   ├── ···
│   │   │   └── index.ts # export mongoDB model
│   │   ├── routes 路由
│   │   │   ├── base
│   │   │   │   └── graphql.ts # catch graphql request
│   │   │   └── index.ts # compose all routes
│   │   └── index.ts # export app
│   │
│   └── index.ts # start server
│
├── .babelrc
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── tslint.json
└── yarn.lock
```