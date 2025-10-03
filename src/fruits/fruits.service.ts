// This file defines the service for managing fruit data, including creating, retrieving, updating, and deleting fruit entries in the database.

import { Injectable } from '@nestjs/common';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import { DatabaseService } from 'src/database/database.service';
import { RowDataPacket } from 'mysql2';

@Injectable()
export class FruitsService {
  constructor(private db: DatabaseService) {}

  private pool = () => this.db.getPool();

  async create(createFruitDto: CreateFruitDto) {
    const { name, color, weight, origin } = createFruitDto;

    await this.db
      .getPool()
      .execute(
        'INSERT INTO fruits (name, color, weight, origin) VALUES (?, ?, ?, ?)',
        [name, color, weight, origin],
      );
    return 'Fruit successfully added';
  }

  async findAll() {
    const [rows] = await this.pool().execute<RowDataPacket[]>(
      'SELECT * FROM fruits',
    );
    return rows;
  }

  async findOne(id: number) {
    const [rows] = await this.pool().execute<RowDataPacket[]>(
      'SELECT * FROM fruits WHERE id = ?',
      [id],
    );

    const fruit = rows[0];

    return fruit;
  }

  async update(id: number, updateFruitDto: UpdateFruitDto) {
    const { name, color, weight, origin, ...rest } = updateFruitDto;

    const [rows] = await this.pool().execute<RowDataPacket[]>(
      'UPDATE fruits SET name = ?, color = ?, weight = ?, origin = ?, sweetness = ?, sourness = ?, spiciness = ?, saltiness = ?, bitterness = ? WHERE id = ?',
      [
        name,
        color,
        weight,
        origin,
        rest.sweetness,
        rest.sourness,
        rest.spiciness,
        rest.saltiness,
        rest.bitterness,
        id,
      ],
    );
    return 'Fruit successfully updated';
  }

  async remove(id: number) {
    const [rows] = await this.pool().execute<RowDataPacket[]>(
      'DELETE FROM fruits WHERE id = ?',
      [id],
    );

    return 'Fruit successfully removed';
  }
}
