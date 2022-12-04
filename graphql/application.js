import { makeExecutableSchema } from '@graphql-tools/schema'
import { typeDefs, resolvers } from './module.js'

export const schema = makeExecutableSchema({ typeDefs, resolvers })
