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
        options: { host: '127.0.0.1', port: 3003 },
      },
    ]),
  ],
})
export class PlantsModule {}
