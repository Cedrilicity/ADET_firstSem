// This file defines the module for the fruits feature, encapsulating the controller and service related to fruit operations.

import { Module } from '@nestjs/common';
import { FruitsService } from './fruits.service';
import { FruitsController } from './fruits.controller';

@Module({
  controllers: [FruitsController],
  providers: [FruitsService],
})
export class FruitsModule {}
