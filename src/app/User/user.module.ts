'use strict';

import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';

import {UserService} from './user.service';
import {UserProvider} from './user.provider';
import {UserController} from './user.controller';

@Module({
  modules: [DatabaseModule],
  controllers: [UserController],
  components: [UserService, ...UserProvider]
})
export class UserModule {}
