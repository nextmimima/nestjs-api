'use strict';

import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'MongoDBConnection',
    // useFactory: async (): Promise<mongoose.Connection> => {
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;

      // db server uri
      // single node
      const mongoDbUri = `${process.env.MONGODB_HOST0}:${process.env.MONGODB_PORT}`;

      // replica set
      const mongoDbReplicaSetUri = `${process.env.MONGODB_HOST0}:${process.env.MONGODB_PORT},
                                    ${process.env.MONGODB_HOST1}:${process.env.MONGODB_PORT},
                                    ${process.env.MONGODB_HOST2}:${process.env.MONGODB_PORT}`;

      const mongoDbReplicaSet = process.env.MONGODB_REPLICASET;

      // db username
      const mongoDbUsername: string = process.env.MONGODB_USERNAME;
      const mongoDbPassword: string = process.env.MONGODB_PASSWORD;

      const mongoDbName: string = process.env.MONGODB_DBNAME;

      let connectionString = '';
      connectionString = mongoDbReplicaSet
        ? `mongodb://${mongoDbUsername}:${mongoDbPassword}@${mongoDbReplicaSetUri}/${mongoDbName}?ssl=true&replicaSet=${mongoDbReplicaSet}&authSource=admin`
        : `mongodb://${mongoDbUri}/${mongoDbName}?authSource=admin`;

      return await mongoose.connect(connectionString, {
        // useMongoClient: true
      });
    }
  }
];
