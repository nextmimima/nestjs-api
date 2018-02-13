import {Component, Inject, Query} from '@nestjs/common';

import {Model} from 'mongoose';

import {IPost} from './interfaces/IPost';
import {PostEditModel} from './models/postEdit.model';

@Component()
export class PostService {
  constructor(@Inject('PostRepository') private readonly postRepository: Model<IPost>) {}

  /**
   * create a post
   * @param post
   */
  public async create(post: PostEditModel): Promise<IPost> {
    return await this.postRepository.create(post);
  }

  /**
   * find a post by query
   * @param where req.query
   */
  public async find(where: Object): Promise<Array<IPost>> {
    return await this.postRepository.find(where).exec();
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
   * find a post by _id
   */
  public async findById(_id: string): Promise<IPost | null> {
    return await this.postRepository.findById(_id).exec();
  }

  /**
   * user a post
   */
  public async update(_id: string, newValue: IPost): Promise<IPost | null> {
    // find post by _id
    let post = await this.postRepository.findById(_id).exec();
    // check post exists
    if (!post._id) {
      console.error("post doesn't exist");
    }
    // find one and update existing user
    await this.postRepository.findByIdAndUpdate(_id, newValue).exec();
    // return
    return await this.postRepository.findById(_id).exec();
  }
}
