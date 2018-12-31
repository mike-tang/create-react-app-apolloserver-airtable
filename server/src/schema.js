const { gql } = require('apollo-server');

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Guest {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    groupId: ID!
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    # guests: [Guest]
    guest(id: ID!): Guest
    # guest(email: String!): Guest
    # me: User
  }
`;

module.exports = typeDefs;