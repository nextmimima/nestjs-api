import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    phone: {type: String, default: ''},
    password: {type: String, minLength: 8},
    status: {type: Number, required: true, default: 0}
  },
  {
    collection: 'Users'
  }
);
