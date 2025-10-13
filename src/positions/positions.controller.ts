import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { PositionsService } from './positions.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('positions')
export class PositionsController {
  constructor(private readonly positionsService: PositionsService) {}

  // Post single position (protected)
  // Use Request to get user info from JWT token
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createPositionDto: CreatePositionDto, @Req() req) {
    // Variable user contains the decoded JWT payload
    const user = req.user;
    // Pass user.id to service to track who created the position
    return this.positionsService.create(createPositionDto, user.id);
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
