import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class SchoolRepository {
  async findAll() {
    return await prisma.school.findMany();
  }

  async findSchoolClosestMatch(schoolName) {
    return await prisma.school.findMany({
      where: {
        schoolname: {
          contains: schoolName,
          mode: 'insensitive',  // Case insensitive search
        },
      },
    });
  }

  async findSchoolByName(schoolName) {
    return await prisma.school.findFirst({
      where: {
        schoolname: {
          equals: schoolName,
          mode: 'insensitive',
        },
      },
    });
  }
}
