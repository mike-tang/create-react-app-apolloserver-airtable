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
    rsvp: String!
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    # guests: [Guest]
    guest(id: ID!): Guest
    # guest(email: String!): Guest
    # me: User
  }

  type Mutation {
    # NEED TO FIX MUTATION TO ACCESS RESPONSE
    updateGuest(id: ID!, rsvp: String!): Guest!
  }

  # type RsvpUpdateResponse {
  #   success: Boolean!
  #   message: String
  # }
`;

module.exports = typeDefs;