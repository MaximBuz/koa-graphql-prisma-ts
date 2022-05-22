import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    async getUsers() {
      const allUsers = await prisma.user.findMany();
      return allUsers;
    },

    async getUserById(_: any, args: { id: number }) {
      const user = await prisma.user.findFirst({
        where: { id: args.id },
      });
      return user;
    },

    async getProfiles() {
      const allProfiles = await prisma.profile.findMany();
      return allProfiles;
    },

    async getProfileById(_: any, args: { id: number }) {
      const profile = await prisma.profile.findFirst({
        where: { id: args.id },
      });
      return profile;
    },

    async getPosts() {
      const allPosts = await prisma.post.findMany();
      return allPosts;
    },

    async getPostById(_: any, args: { id: number }) {
      const post = await prisma.post.findFirst({
        where: { id: args.id },
      });
      return post;
    },
  },
  Mutation: {
    async addUser(_: any, args: Prisma.UserCreateInput) {
      await prisma.user.create({
        data: { name: args.name, email: args.email },
      });
      return 'created';
    },

    async addPost(_: any, args: Prisma.PostCreateInput & { userId: number }) {
      await prisma.user.update({
        where: { id: args.userId },
        data: {
          posts: {
            create: { ...args },
          },
        },
      });
      return 'created';
    },

    async addProfile(_: any, args: Prisma.ProfileCreateInput & { userId: number }) {
      await prisma.user.update({
        where: { id: args.userId },
        data: {
          profile: {
            create: { ...args },
          },
        },
      });
    },
  },
};
