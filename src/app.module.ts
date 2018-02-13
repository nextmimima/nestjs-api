import {Module} from '@nestjs/common';

import {PostModule} from './app/Post/post.module';
import {UserModule} from './app/User/user.module';

@Module({
  imports: [PostModule, UserModule],
  // controllers: [AppController],
  components: []
})
export class ApplicationModule {}
