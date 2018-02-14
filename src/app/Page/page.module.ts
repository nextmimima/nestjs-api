'use strict';

import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';

import {PageService} from './page.service';
import {PageProvider} from './page.provider';
import {PageController} from './page.controller';

@Module({
  modules: [DatabaseModule],
  controllers: [PageController],
  components: [PageService, ...PageProvider]
})
export class PostModule {}