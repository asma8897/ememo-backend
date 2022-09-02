import { Module } from '@nestjs/common';
import { EmemoService } from './ememo.service';
import { EmemoController } from './ememo.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EmemoController],
  providers: [EmemoService, PrismaService]
})
export class EmemoModule {}
