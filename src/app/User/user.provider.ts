'use strict';

import {Connection, connection} from 'mongoose';
import {UserSchema} from './schemas/user.schema';

export const UserProvider = [
  {
    provide: 'UserRepository',
    useFactory: (connection: Connection) => connection.model('Users', UserSchema),
    inject: ['MongoDBConnection']
  }
];
