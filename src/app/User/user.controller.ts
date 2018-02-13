'use strict';

import {Controller, Get, Response, HttpStatus, Param, Query, Body, Post, Request, Patch, Delete} from '@nestjs/common';
import {UserService} from './user.service';
import {UserEditModel} from './models/userEdit.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get('users')
  // public async findAllUsers(@Response() res) {
  //   const users = await this.userService.findAll();
  //   return res.status(HttpStatus.OK).json(users);
  // }

  /**
   * find users by query string
   * @param res response
   * @param query req.query
   */
  @Get('find')
  public async findUsers(@Response() res, @Query() query) {
    const where = this.userService.castQuery(query);
    const users = await this.userService.find(where);
    return res.status(HttpStatus.OK).json(users);
  }

  /**
   * find user by id
   * @param res response
   * @param param req.param
   * @param param._id user _id
   */
  @Get(':_id')
  public async findUserById(@Response() res, @Param() param) {
    const user = await this.userService.findById(param._id);
    return res.status(HttpStatus.OK).json(user);
  }

  /**
   * create a user
   * @param res response
   * @param userEditModel
   */
  @Post()
  public async createUser(@Response() res, @Body() userEditModel: UserEditModel) {
    const user = await this.userService.create(userEditModel);
    return res.status(HttpStatus.OK).json(user);
  }

  /**
   * update a user by id
   * @param param
   * @param res
   * @param body
   */
  @Patch(':_id')
  public async updateUser(@Param() param, @Response() res, @Body() body) {
    const user = await this.userService.update(param._id, body);
    return res.status(HttpStatus.OK).json(user);
  }
}
