import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
// import { APP_GUARD } from '@nestjs/core';
// import { RolesGuard } from 'src/auth/guards/roles.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  controllers: [DepartmentsController],
  providers: [
    DepartmentsService,
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class DepartmentsModule {}
