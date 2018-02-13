'use strict';

import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'MongoDBConnection',
    // useFactory: async (): Promise<mongoose.Connection> => {
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect('mongodb://localhost/nest', {
        // useMongoClient: true
      });
    }
  }
];
