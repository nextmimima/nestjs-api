'use strict';

// import {Users} from '../users.entity';
import {IPage} from './IPage';
import {PageEditModel} from '../models/pageEdit.model';

export interface IPageService {
  create(page: PageEditModel): Promise<IPage>;
  find(where: Object): Promise<Array<IPage>>;
  findById(_id: string): Promise<IPage | null>;
  update(_id: string, newValue: IPage): Promise<IPage | null>;
}