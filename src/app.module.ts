import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
