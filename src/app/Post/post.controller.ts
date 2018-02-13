'use strict';

import {Controller, Get, Response, HttpStatus, Param, Query, Body, Post, Request, Patch, Delete} from '@nestjs/common';

import {PostService} from './post.service';
import {PostEditModel} from './models/postEdit.model';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  /**
   * find posts by query string
   * @param res response
   * @param query req.query
   */
  @Get('find')
  public async findPosts(@Response() res, @Query() query) {
    const where = this.postService.castQuery(query);
    const posts = await this.postService.find(where);
    return res.status(HttpStatus.OK).json(posts);
  }

  /**
   * find post by id
   * @param res response
   * @param param req.param
   * @param param._id post ID
   */
  @Get(':_id')
  public async findUserById(@Response() res, @Param() param) {
    const post = await this.postService.findById(param._id);
    return res.status(HttpStatus.OK).json(post);
  }

  /**
   * create a post
   * @param res response
   * @param postEditModel
   */
  @Post()
  public async createPost(@Response() res, @Body() postEditModel: PostEditModel) {
    const post = await this.postService.create(postEditModel);
    return res.status(HttpStatus.OK).json(post);
  }

  /**
   * update a post by id
   * @param param
   * @param res response
   * @param body req.body
   */
  @Patch(':_id')
  public async updatePost(@Param() param, @Response() res, @Body() body) {
    const post = await this.postService.update(param._id, body);
    return res.status(HttpStatus.OK).json(post);
  }
}
