import { prisma } from './index';

export const Query = {
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
};
