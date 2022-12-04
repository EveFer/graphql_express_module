
const users = [
  {
    name: 'The Awakening',
    lastName: 'Kate Chopin'
  },
  {
    name: 'City of Glass',
    lastName: 'Paul Auster'
  }
]

const typeDefs = /* GraphQL */ `
    type User {
        name: String
        lastName: String
    }

    type Query {
        users: [User]
    }
`

const resolvers = {
  Query: {
    users: () => users
  }
}

export default {
  typeDefs,
  resolvers
}
