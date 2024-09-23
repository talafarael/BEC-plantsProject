import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LeadsController } from './uer/leads/leads.controller';
import { User } from './user/user';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController, LeadsController],
  providers: [AppService, User],
})
export class AppModule {}
