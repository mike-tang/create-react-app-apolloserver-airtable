const { ApolloServer, gql } = require('apollo-server')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const GuestAPI = require('./datasources/guest')
const dataSources = () => ({
  guestAPI: new GuestAPI(),
})

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for. A more complete example might fetch
// from an existing data source like a REST API or database.
// const guests = [
//   {
//     id: 111,
//     email: 'michael.c.tang@gmail.com',
//     firstName: 'Mike',
//     lastName: 'Tang',
//   },
//   {
//     id: 222,
//     email: 'candiyang@gmail.com',
//     firstName: 'Candice',
//     lastName: 'Yang',
//   },
// ];


// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
// const resolvers = {
//   Query: {
//     guests: () => guests,
//   },
// };

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