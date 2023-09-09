import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import conectionDB from './dbConection';
import { DataSource } from 'typeorm';
import { GuestsModule } from './guests/guests.module';
import { DepartmentsModule } from './departments/departments.module';

@Module({
  imports: [
    conectionDB,
    UsersModule,
    AuthModule,
    GuestsModule,
    DepartmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
