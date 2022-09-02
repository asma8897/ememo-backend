import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './dto/user.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: UserDto) {
    return await this.prisma.user.create({
      data: {
        name: dto.name,
        jobTitle: dto.jobTitle,
        department: {connect:{id: +dto.departmentId}},
        company: {connect:{id: +dto.companyId}}
      }
    })
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(UserWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: UserWhereUniqueInput
    });
  }

  update(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      data,
      where,
    });
  }

  remove(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where,
    });
  }
}
