import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.mudule';
import { UsersModule } from './user/user.mudule';



@Module({
  imports: [UsersModule,AuthModule],
  providers: [],
  controllers:[AppController]
})
export class AppModule {
  constructor() {
    console.log('this is piyush kumar');
  }
}
