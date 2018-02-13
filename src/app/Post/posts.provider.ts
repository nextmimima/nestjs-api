'use strict';

import {Connection, connection} from 'mongoose';
import {PostSchema} from './schemas/post.schema';

export const PostsProvider = [
  {
    provide: 'PostsRepository',
    useFactory: (connection: Connection) => connection.model('Posts', PostSchema),
    inject: ['MongoDBConnection']
  }
];
