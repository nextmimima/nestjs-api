'use strict';

import {IUser} from './IUser';
import {UserEditModel} from '../models/userEdit.model';

export interface IUserService {
  create(user: UserEditModel): Promise<IUser>;
  // findAll(): Promise<Array<IUser>>;
  find(query: Object): Promise<Array<IUser>>;
  findById(_id: string): Promise<IUser | null>;
  update(_id: string, newValue: IUser): Promise<IUser | null>;
  // delete(ID: string): Promise<number>;
}
