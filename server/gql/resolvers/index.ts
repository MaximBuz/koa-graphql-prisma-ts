import { User } from './user';
import { Profile } from './profile';
import { Post } from './post';
import { Mutation } from './mutations';
import { PrismaClient } from '@prisma/client';
import { Query } from './queries';
export const prisma = new PrismaClient();

export const resolvers = {
  Query,
  Mutation,
  Post,
  Profile,
  User
}