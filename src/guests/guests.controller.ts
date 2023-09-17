import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { GuestsService } from './guests.service';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.strategy';
import {
  ApiTags,
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
} from '@nestjs/swagger/dist/decorators';
import { bodyCreateSWG, okResponseCreateSWG } from './swagger/create.swagger';
import { bodyUpdateSWG, okResponseUpdateSWG } from './swagger/update.swagger';
import { Guest } from './entities/guest.entity';
import { ListResponse } from 'src/auth/schemas/listResponse.schema';
import { FindOptionsOrderValue } from 'typeorm';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Invitados')
@Controller('guests')
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  @ApiBody(bodyCreateSWG)
  @ApiOkResponse(okResponseCreateSWG)
  @Post()
  create(@Body() createGuestDto: CreateGuestDto) {
    return this.guestsService.create(createGuestDto);
  }

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('perPage') perPage: number,
    @Query('key') key: keyof Guest,
    @Query('keyword') keyword: string,
    @Query('order') order: FindOptionsOrderValue,
  ): Promise<ListResponse<Guest>> {
    return this.guestsService.findAll({ page, perPage, key, keyword, order });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guestsService.findOne(+id);
  }

  @ApiBody(bodyUpdateSWG)
  @ApiOkResponse(okResponseUpdateSWG)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuestDto: UpdateGuestDto) {
    return this.guestsService.update(+id, updateGuestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guestsService.remove(+id);
  }
}
