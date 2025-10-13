import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FruitsModule } from './fruits/fruits.module';
import { PositionsModule } from './positions/positions.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    FruitsModule,
    PositionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
