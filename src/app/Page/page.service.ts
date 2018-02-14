import {Component, Inject, Query} from '@nestjs/common';

import {Model} from 'mongoose';

import {IPage, IPageService} from './interfaces';
import {PageEditModel} from './models/pageEdit.model';

@Component()
export class PageService implements IPageService {
  constructor(@Inject('PageRepository') private readonly pageRepository: Model<IPage>) {}

  /**
   * create a page
   * @param page
   */
  public async create(page: PageEditModel): Promise<IPage> {
    return await this.pageRepository.create(page);
  }

  /**
   * find a page by query
   * @param where req.query
   */
  public async find(where: Object): Promise<Array<IPage>> {
    return await this.pageRepository.find(where).exec();
  }

  /**
   * cast req.query to
   * @param query req.query object
   *
   */
  public castQuery(@Query() query): Object {
    let where = <any>{};
    if (query.email) {
      where.$and = [];
      where.$and.push({email: query.email});
    }
    return query;
  }

  /**
   * find a page by _id
   */
  public async findById(_id: string): Promise<IPage | null> {
    return await this.pageRepository.findById(_id).exec();
  }

  /**
   * user a page
   */
  public async update(_id: string, newValue: IPage): Promise<IPage | null> {
    // find post by _id
    let post = await this.pageRepository.findById(_id).exec();
    // check post exists
    if (!post._id) {
      console.error("page doesn't exist");
    }
    // find one and update existing user
    await this.pageRepository.findByIdAndUpdate(_id, newValue).exec();
    // return
    return await this.pageRepository.findById(_id).exec();
  }
}
