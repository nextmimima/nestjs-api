'use strict';

import {Connection, connection} from 'mongoose';
import {PostSchema} from './schemas/post.schema';

export const PostProvider = [
  {
    provide: 'PostRepository',
    useFactory: (connection: Connection) => connection.model('Posts', PostSchema),
    inject: ['MongoDBConnection']
  }
];
