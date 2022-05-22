import { gql } from 'apollo-server-koa';

export const typeDefs = gql`

  type User {
    id: Int!
    email: String!
    name: String
    posts: [Post]!
    profile: Profile
  }

  type Profile {
    id: Int!
    bio: String
    user: User!
    userId: Int!
  }

  type Post {
    id: Int!
    createdAt: String!
    updatedAt: String!
    title: String!
    content: String
    published: Boolean!
    author: User
    authorId: Int
  }

  type Query {
    getUsers: [User]
    getUserById(id: Int!): User
    
    getProfiles: [Profile]
    getProfileById(id: Int!): Profile

    getPosts: [Post]
    getPostById(id: Int!): Post
  }

  type Mutation {
    addUser(name: String!, email: String!): String!
    addPost(
      userId: Int!, title: String!
      content: String,
      published: Boolean): String!
    addProfile(
      userId: Int!, title: String!
      bio: String!): String!
  }
`;
