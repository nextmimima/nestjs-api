'use strict';

import {Controller, Get, Response, HttpStatus, Param, Query, Body, Post, Request, Patch, Delete} from '@nestjs/common';

import {PageService} from './page.service';
import {PageEditModel} from './models/pageEdit.model';

@Controller('pages')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  /**
   * find pages by query string
   * @param res response
   * @param query req.query
   */
  @Get('find')
  public async findPages(@Response() res, @Query() query) {
    const where = this.pageService.castQuery(query);
    const pages = await this.pageService.find(where);
    return res.status(HttpStatus.OK).json(pages);
  }

  /**
   * find page by id
   * @param res response
   * @param param req.param
   * @param param._id post ID
   */
  @Get(':_id')
  public async findUserById(@Response() res, @Param() param) {
    const page = await this.pageService.findById(param._id);
    return res.status(HttpStatus.OK).json(page);
  }

  /**
   * create a page
   * @param res response
   * @param postEditModel
   */
  @Post()
  public async createPage(@Response() res, @Body() pageEditModel: PageEditModel) {
    const page = await this.pageService.create(pageEditModel);
    return res.status(HttpStatus.OK).json(page);
  }

  /**
   * update a page by id
   * @param param
   * @param res response
   * @param body req.body
   */
  @Patch(':_id')
  public async updatePage(@Param() param, @Response() res, @Body() body) {
    const page = await this.pageService.update(param._id, body);
    return res.status(HttpStatus.OK).json(page);
  }
}
