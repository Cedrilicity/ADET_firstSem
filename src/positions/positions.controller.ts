import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PositionsService } from './positions.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('positions')
export class PositionsController {
  constructor(private readonly positionsService: PositionsService) {}

  // Post single position (protected)
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createPositionDto: CreatePositionDto) {
    return this.positionsService.create(createPositionDto);
  }

  // Get all positions (protected)
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.positionsService.findAll();
  }

  // Get single position by id (protected)
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.positionsService.findOne(+id);
  }

  // Update position (protected)
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePositionDto: UpdatePositionDto,
  ) {
    return this.positionsService.update(+id, updatePositionDto);
  }

  // Delete position (protected)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.positionsService.remove(+id);
  }
}
