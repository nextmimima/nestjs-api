'use strict';

// import {Users} from '../users.entity';
import {IPost} from './IPost';
import {PostEditModel} from '../models/postEdit.model';

export interface IPostService {
  create(post: PostEditModel): Promise<IPost>;
  find(where: Object): Promise<Array<IPost>>;
  findById(_id: string): Promise<IPost | null>;
  update(_id: string, newValue: IPost): Promise<IPost | null>;
}
