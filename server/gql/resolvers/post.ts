import { prisma } from './index';

export const Post = {
  async author(parent: any) {
    const user = await prisma.user.findFirst({
      where: { id: parent.authorId },
    });
    return user;
  },
};
