import { ClientsModule, Transport } from '@nestjs/microservices';

import { Module } from '@nestjs/common';
import { AuthController } from './user.controller';

@Module({
  controllers: [AuthController],
  imports: [
    ClientsModule.register([
      {
        name: 'USER_MICROSERVICE',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
    ]),
  ],
})
export class AuthModule {}
