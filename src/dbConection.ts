import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Auth } from './auth/entities/auth.entity';
import { Guest } from './guests/entities/guest.entity';
import { Department } from './departments/entities/department.entity';

export const conection = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'guests_project',
  entities: [User, Auth, Guest, Department],
  synchronize: true,
});

export const conectionRemote = TypeOrmModule.forRoot({
  type: 'mysql',
  poolSize: 2,
  host: 'cardsdb1.cez0arggxfph.sa-east-1.rds.amazonaws.com',
  port: 3306,
  username: 'admin',
  password: 'testo123',

  database: 'cardsDB',
  entities: [User, Auth, Guest, Department],
  synchronize: true,
});

export default conection;
