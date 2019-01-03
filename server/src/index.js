const { ApolloServer, gql } = require('apollo-server')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const GuestAPI = require('./datasources/guest')
const dataSources = () => ({
  guestAPI: new GuestAPI(),
})

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  dataSources,
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});