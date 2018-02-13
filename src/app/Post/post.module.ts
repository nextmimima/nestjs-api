'use strict';

import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';

import {PostService} from './post.service';
import {PostProvider} from './post.provider';
import {PostController} from './post.controller';

@Module({
  modules: [DatabaseModule],
  controllers: [PostController],
  components: [PostService, ...PostProvider]
})
export class PostModule {}
