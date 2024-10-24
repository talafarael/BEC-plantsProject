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
        options: { host: 'localhost', port: 3003 }, // Здесь вы явно указываете TCP транспорт
      },
    ]),
  ],
})
export class PlantsModule {}
