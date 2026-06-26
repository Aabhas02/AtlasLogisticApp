import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    AuthModule,
    PostsModule,
  ],
  controllers: [
    AppController,
    TestController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}