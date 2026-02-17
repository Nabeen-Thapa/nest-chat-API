import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FriendRequestService } from './friend-request.service';
import { FriendRequestController } from './friend-request.controller';
import { AuthMiddleware } from '../common/middleware/auth.middleware';

@Module({
  controllers: [FriendRequestController],
  providers: [FriendRequestService],
})
export class FriendRequestModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
    .forRoutes(FriendRequestController)
  }
}
