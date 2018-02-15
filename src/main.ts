import {NestFactory} from '@nestjs/core';
import {ApplicationModule} from './app.module';
// import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  // app.use(cors());
  const port = 8210;
  await app.listen(port);
  console.log('nestjs api run successfully at port ' + port);
}
bootstrap();
