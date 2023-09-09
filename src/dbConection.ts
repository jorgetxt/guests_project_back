import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Auth } from './auth/entities/auth.entity';
// import { User } from './users/entities/user.entity';
// import { Card } from './cards/entities/card.entity';

const conection = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'guests_project',
  entities: [User, Auth],
  synchronize: true,
});

export default conection;
