import { Injectable } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { DatabaseService } from 'src/database/database.service';
import { OkPacket, RowDataPacket } from 'mysql2';

@Injectable()
export class PositionsService {
  constructor(private db: DatabaseService) {}

  private pool = () => this.db.getPool();

  async create(createPositionDto: CreatePositionDto) {
    const { code, title } = createPositionDto;
    const [res] = await this.pool().execute<OkPacket>(
      'INSERT INTO positions (code, title) VALUES (?, ?)',
      [code, title],
    );

    return this.findOne(res.insertId);
  }

  async findAll() {
    const [rows] = await this.pool().execute<RowDataPacket[]>(
      'SELECT id, code, title, created_at FROM positions',
    );
    return rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} positiobn`;
  }

  update(id: number, updatePositionDto: UpdatePositionDto) {
    return `This action updates a #${id} position`;
  }

  remove(id: number) {
    return `This action removes a #${id} position`;
  }
}
