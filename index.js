import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'

import express from 'express'
import http from 'http'
import cors from 'cors'
import bodyParser from 'body-parser'

import { schema } from './graphql/application.js'

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin'
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster'
  }
]

// const typeDefs = `#graphql
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `

// const resolvers = {
//   Query: {
//     books: () => books
//   }
// }

//

const app = express()

const httpServer = http.createServer(app)

const server = new ApolloServer({
  schema,
  // typeDefs,
  // resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]

})

await server.start()

app.use(
  '/',
  cors(),
  bodyParser.json(),
  // expressMiddleware accepts the same arguments:
  // an Apollo Server instance and optional configuration options
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token })
  })
)

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))

console.log('🚀 Server ready at http://localhost:4000/')
