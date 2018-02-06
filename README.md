# koa-graph-mongo

Koa server is a open-source GraphQL server.

It is built on top of the Node.js, koa, GraphQL, mongoDB, redis and TypeScript.

## Getting Started

```bash
npm install
npm start

npm run build.doc # when you keeping server running at port 4001
```

## Directory Structure

```
├── src
│   ├── config
│   │   └── index.ts # project config
│   │
│   ├── db
│   │   ├── config.ts # mongoDB config
│   │   └── index.ts # connect to mongoDB
│   │
│   ├── server
│   │   ├── auth # auth
│   │   │
│   │   ├── controller # controllers
│   │   │   ├── todo # todo controller
│   │   │   ├── ···
│   │   │   └── index.ts # controller collection
│   │   │
│   │   ├── graphql
│   │   │   ├── todo # todo graphql
│   │   │   │   ├── TodoMutation.ts # Todo mutation
│   │   │   │   ├── TodoQuery.ts # Todo Query
│   │   │   │   ├── TodoType.ts # Todo Type
│   │   │   │   └── index.ts # export Todo graphql config
│   │   │   ├── ···
│   │   │   └── index.ts # graphql collection
│   │   │
│   │   ├── middleware
│   │   │   └── index.ts # server middleware
│   │   │
│   │   ├── model # mongoDB model
│   │   │   ├── todo
│   │   │   ├── ···
│   │   │   └── index.ts # model collection
│   │   │
│   │   ├── routes # routes
│   │   │   ├── api # not through graphql
│   │   │   │
│   │   │   ├── base
│   │   │   │   └── graphql.ts # catch graphql request
│   │   │   │
│   │   │   └── index.ts # routes collection
│   │   │
│   │   └── index.ts # export app
│   │
│   ├── tools # tool
│   │
│   └── index.ts # start server
│
├── test # test
│
├── package.json
├── README.md
├── tsconfig.json
└── tslint.json
```