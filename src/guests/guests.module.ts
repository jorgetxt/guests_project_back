import { Module } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { GuestsController } from './guests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guest } from './entities/guest.entity';
import { Department } from 'src/departments/entities/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Guest, Department])],
  controllers: [GuestsController],
  providers: [GuestsService],
})
export class GuestsModule {}
