const posts = [
  {
    title: 'Titulo 1',
    author: {
      name: 'The Awakening',
      lastName: 'Kate Chopin'
    }
  },
  {
    title: 'Titulo 2',
    author: {
      name: 'City of Glass',
      lastName: 'Paul Auster'
    }
  }
]

export const typeDefs = /* GraphQL */ `
    type Post {
        title: String
        author: User
    }

    extend type Query {
        posts: [Post]
    }
`

export const resolvers = {
  Query: {
    posts: () => posts
  }
}

export default {
  typeDefs,
  resolvers
}
