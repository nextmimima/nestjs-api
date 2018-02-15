import {Get, Controller, Response, HttpStatus} from '@nestjs/common';
const pJSON = require('../package.json');

@Controller()
export class AppController {
  @Get()
  root(): string {
    return pJSON.name;
  }

  @Get('health')
  public async findUsers(@Response() res) {
    return res.status(HttpStatus.OK).json('This app is healthy');
  }
}
