import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
