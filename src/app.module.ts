import {Module, NestModule, MiddlewaresConsumer, RequestMethod} from '@nestjs/common';
import { CorsMiddleware } from './core/middlewares/cors.middleware';

import {PageModule} from './app/Page/page.module';
import {PostModule} from './app/Post/post.module';
import {UserModule} from './app/User/user.module';

@Module({
  imports: [PageModule, PostModule, UserModule],
  // controllers: [AppController],
  components: []
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
      consumer.apply([]).forRoutes(
        // routes apply this middleware
        { path: '*', method: RequestMethod.ALL }
      );
  }
}
