import { Injectable } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { DatabaseService } from 'src/database/database.service';
import { OkPacket, RowDataPacket } from 'mysql2';

@Injectable()
export class PositionsService {
  constructor(private db: DatabaseService) {}

  private pool = () => this.db.getPool();

  // Include id to track who created the position
  async create(createPositionDto: CreatePositionDto, id: number) {
    const { code, title } = createPositionDto;
    const [res] = await this.pool().execute<OkPacket>(
      'INSERT INTO positions (code, title, user_id) VALUES (?, ?, ?)',
      [code, title, id],
    );

    return this.findOne(res.insertId);
  }

  async findAll() {
    const [rows] = await this.pool().execute<RowDataPacket[]>(
      'SELECT id, code, title, created_at FROM positions',
    );
    return rows;
  }

  async findOne(id: number) {
    const [rows] = await this.pool().execute<RowDataPacket[]>(
      'SELECT id, code, title, created_at, user_id FROM positions WHERE id = ?',
      [id],
    );
    return rows[0];
  }

  async update(id: number, updatePositionDto: UpdatePositionDto) {
    const { code, title } = updatePositionDto;
    const fields: string[] = [];
    const values: any[] = [];

    if (code) {
      fields.push('code = ?');
      values.push(code);
    }

    if (title) {
      fields.push('title = ?');
      values.push(title);
    }

    if (fields.length === 0) return await this.findOne(id);

    values.push(id);

    const sql = `UPDATE positions SET ${fields.join(', ')} WHERE id = ?`;
    await this.pool().execute(sql, values);

    return this.findOne(id);
  }

  async remove(id: number) {
    const [res] = await this.pool().execute<OkPacket>(
      'DELETE FROM positions WHERE id = ?',
      [id],
    );

    return res.affectedRows > 0;
  }
}
