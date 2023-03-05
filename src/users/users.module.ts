import { Module } from '@nestjs/common';
import { JsonApiModule } from 'json-api-nestjs';

import { Users } from '../database/entity/users.entity';

@Module({
  imports: [
    JsonApiModule.forRoot({
      entities: [Users],
    }),
  ],
})
export class UsersModule {}
