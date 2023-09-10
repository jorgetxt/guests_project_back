import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.strategy';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiOkResponse,
} from '@nestjs/swagger/dist/decorators';
import { bodyCreateSWG, okResponseCreateSWG } from './swagger/create.swagger';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Departamentos')
@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @ApiBody(bodyCreateSWG)
  @ApiOkResponse(okResponseCreateSWG)
  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsService.create(createDepartmentDto);
  }

  @Get()
  findAll() {
    return this.departmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    return this.departmentsService.update(+id, updateDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentsService.remove(+id);
  }
}
