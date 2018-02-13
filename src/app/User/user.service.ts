'use strict';

import {Component, Inject, Query} from '@nestjs/common';
import {IUser, IUserService} from './interfaces';
import {Model} from 'mongoose';
// import {InjectRepository} from '@nestjs/typeorm';
import {UserEditModel} from './models/userEdit.model';

@Component()
export class UserService implements IUserService {
  constructor(@Inject('UserRepository') private readonly userRepository: Model<IUser>) {}

  /**
   * create a user
   * @param user
   */
  public async create(user: UserEditModel): Promise<IUser> {
    return await this.userRepository.create(user);
  }

  // public async findAll(): Promise<Array<IUser>> {
  //   return await this.userRepository.find().exec();
  // }

  /**
   * find a user by query
   * @param where req.query
   */
  public async find(where: Object): Promise<Array<IUser>> {
    return await this.userRepository.find(where).exec();
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
      var regexEmail = new RegExp(query.email, 'i');
      where.$and.push({email: regexEmail});
    }
    return where;
  }

  /**
   * find a user by _id
   */
  public async findById(_id): Promise<IUser | null> {
    return await this.userRepository.findById(_id).exec();
  }

  /**
   * user a user
   */
  public async update(_id: string, newValue: IUser): Promise<IUser | null> {
    // find user by _id
    let user = await this.userRepository.findById(_id).exec();
    // check user exists
    if (!user._id) {
      console.error("user doesn't exist");
    }
    // find one and update existing user
    await this.userRepository.findByIdAndUpdate(_id, newValue).exec();
    // return
    return await this.userRepository.findById(_id).exec();
  }
}
