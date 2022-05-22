import { prisma } from './index';

export const Profile = {
  async user(parent: any) {
    const user = await prisma.user.findFirst({
      where: { id: parent.userId },
    });
    return user;
  },
};
