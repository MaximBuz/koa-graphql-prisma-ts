import { prisma } from './index';
import { Prisma } from '@prisma/client';

export const Mutation = {
  async addUser(_: any, args: Prisma.UserCreateInput) {
    await prisma.user.create({
      data: { name: args.name, email: args.email },
    });
    return 'created';
  },

  async addPost (_: any, args: Prisma.PostCreateInput & { userId: number; }) {
    const { userId, ...inputs } = args;
    await prisma.user.update({
      where: { id: userId },
      data: {
        posts: {
          create: { ...inputs },
        },
      },
    });
    return 'created';
  },

  async addProfile(_: any, args: Prisma.ProfileCreateInput & { userId: number }) {
    const { userId, ...inputs } = args;
    await prisma.user.update({
      where: { id: userId },
      data: {
        profile: {
          create: { ...inputs },
        },
      },
    });
  },
};
