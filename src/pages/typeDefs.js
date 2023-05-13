// typeDefs.js

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
  }

  input UserInput {
    username: String!
    password: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    registerUser(input: UserInput!): User!
  }
`;

module.exports = typeDefs;
