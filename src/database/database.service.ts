import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  pool!: mysql.Pool;

  async onModuleInit() {
    this.pool = mysql.createPool({
      host: process.env.DB_HOST || 'HOSTNAME',
      port: +(process.env.DB_PORT || 'HOSTPORT'),
      user: process.env.DB_USER || 'USERNAME',
      password: process.env.DB_PASSWORD || 'PASSWORD',
      database: process.env.DB_NAME || 'DBNAME',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
    // optional: test connection
    const conn = await this.pool.getConnection();
    await conn.ping();
    conn.release();
    console.log('MySQL pool created');
  }

  async onModuleDestroy() {
    this.pool.end();
  }

  getPool() {
    return this.pool;
  }
}
