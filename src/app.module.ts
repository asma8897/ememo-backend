import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmemoModule } from './ememo/ememo.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [EmemoModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
