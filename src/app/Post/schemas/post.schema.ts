import * as mongoose from 'mongoose';

const LocalizeStringSchema = require('../../../core/database/localizeString.schema');

export const PostSchema = new mongoose.Schema(
  {
    title: LocalizeStringSchema,
    snippets: LocalizeStringSchema,
    type: {type: String, default: 'na', required: true}, //you may define by yourself
    mainImage: {type: String},
    thumbnail: {type: String},
    content: LocalizeStringSchema,
    isActive: {type: Boolean, default: true}
  },
  {
    collection: 'Posts',
    timestamps: true
  }
);
