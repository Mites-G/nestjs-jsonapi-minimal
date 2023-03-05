import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { config as ormConfig } from './config-cli';
import { Users } from './entity/users.entity';

export const config: TypeOrmModuleOptions = {
  ...ormConfig,
  ...{
    entities: [Users],
  },
};
