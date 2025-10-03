import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as mysql from 'mysql2/promise';
export declare class DatabaseService implements OnModuleInit, OnModuleDestroy {
    pool: mysql.Pool;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    getPool(): mysql.Pool;
}
