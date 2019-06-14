# blog-server

blog-server is a open-source GraphQL server.

It is built on Node.js, koa, GraphQL, mongoDB, redis and TypeScript.

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
│   │   │   ├── user # user controller
│   │   │   ├── ···
│   │   │   └── index.ts # controller collection
│   │   │
│   │   ├── graphql
│   │   │   ├── user # user graphql
│   │   │   │   ├── UserMutation.ts # User mutation
│   │   │   │   ├── UserQuery.ts # User Query
│   │   │   │   ├── UserType.ts # User Type
│   │   │   │   └── index.ts # export User graphql config
│   │   │   ├── ···
│   │   │   └── index.ts # graphql collection
│   │   │
│   │   ├── middleware
│   │   │   └── index.ts # server middleware
│   │   │
│   │   ├── model # mongoDB model
│   │   │   ├── user
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
│   ├── utils # utils
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
