import { prisma } from './index';

export const User = {
  async posts(parent: any) {
    const posts = await prisma.post.findMany({
      where: { authorId: parent.id },
    });
    return posts;
  },
  async profile(parent: any) {
    const profile = await prisma.profile.findFirst({
      where: { userId: parent.id },
    });
    return profile;
  },
};
