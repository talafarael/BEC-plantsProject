import { NestFactory } from '@nestjs/core';
import { PlantsModule } from './plants.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(PlantsModule);
  
  const expressApp = express();
  expressApp.use(express.json());

  expressApp.get('/process-data', (req: any, res: any) => {
    const { data } = req.body;
    res.json({ message: 'Data processed', data });
  });

  app.use(expressApp); // Integrate Express into Nest

  await app.listen(3003);
}
bootstrap();