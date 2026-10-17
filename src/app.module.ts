import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AuthModule } from './auth/auth.module.js';
import { UserService } from './user/user.service.js';
import { UserModule } from './user/user.module.js';


export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [AuthModule, UserModule],
  providers: [UserService],

})
export class AppModule {}
