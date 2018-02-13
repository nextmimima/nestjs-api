'use strict';
import {Document} from 'mongoose';

export interface IUser extends Document {
  readonly _id: string;
  readonly email: string;
  readonly phone: string;
  readonly password: string;
  readonly status: number;
}
