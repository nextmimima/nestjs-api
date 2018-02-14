import * as mongoose from 'mongoose';

const LocalizeStringSchema = require('../../../core/database/localizeString.schema');

export const PageSchema = new mongoose.Schema(
  {
    title: LocalizeStringSchema,
    path: {type: String},
    remarks: {type: String},
    content: mongoose.SchemaTypes.Mixed,
    isActive: {type: Boolean, default: true}
  },
  {
    collection: 'Pages',
    timestamps: true
  }
);