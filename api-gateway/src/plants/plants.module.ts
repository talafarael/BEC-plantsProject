import { ClientsModule, Transport } from '@nestjs/microservices';

import { Module } from '@nestjs/common';
import { PlantsController } from './plants.controller';

@Module({
  controllers: [PlantsController],
  imports: [
    ClientsModule.register([
      {
        name: 'PLANTS_MICROSERVICE',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
    ]),
  ],
})
export class PlantsModule {}
