import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './user/ user.module';
import { PlantsModule } from './plants/plants.module';

@Module({
  imports: [AuthModule,PlantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
