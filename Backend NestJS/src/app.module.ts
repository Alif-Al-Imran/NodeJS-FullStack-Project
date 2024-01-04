import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RatingsModule } from 'src/module/ratings.module';
import { TrafficModule } from 'src/module/traffic.module';
import { RevenueModule } from 'src/module/revenue.module';
import { SalesStatModule } from 'src/module/sales-stat.module';
import { UserModule } from 'src/module/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import  config  from 'ormconfig';

@Module({
  imports: [RatingsModule, TrafficModule, RevenueModule, SalesStatModule, UserModule, AuthModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    // consumer
    // .apply(TestMiddlewire)
    // .forRoutes(AuthController)
  }
}
