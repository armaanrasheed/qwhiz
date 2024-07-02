import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserRepository {
  async findAll() {
    return await prisma.user.findMany();
  }
}
