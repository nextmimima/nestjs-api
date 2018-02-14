'use strict';

import {Connection, connection} from 'mongoose';
import {PageSchema} from './schemas/page.schema';

export const PageProvider = [
  {
    provide: 'PageRepository',
    useFactory: (connection: Connection) => connection.model('Pages', PageSchema),
    inject: ['MongoDBConnection']
  }
];