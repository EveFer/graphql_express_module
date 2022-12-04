import userModule from './modules/user.module.js'
import blogModule from './modules/blog.module.js'

const types = [
  userModule.typeDefs,
  blogModule.typeDefs
]

export const typeDefs = types.reduce((accum, current) => {
  accum += current
  return accum
}, '')

export const resolvers = {
  Query: {
    ...userModule.resolvers.Query,
    ...blogModule.resolvers.Query
  }
}
