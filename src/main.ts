import {NestFactory} from '@nestjs/core';
import {ApplicationModule} from './app.module';
import * as cors from 'cors';

const pJSON = require('../package.json');

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(cors());
  const port = 8210;
  await app.listen(port);
  console.log('%s run in [ %s ] environment successfully at port %s', pJSON.name, process.env.NODE_ENV, port);
}
bootstrap();
