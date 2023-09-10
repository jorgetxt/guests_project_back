import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Auth } from './auth/entities/auth.entity';
import { Guest } from './guests/entities/guest.entity';
import { Department } from './departments/entities/department.entity';

const conection = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'guests_project',
  entities: [User, Auth, Guest, Department],
  synchronize: true,
});

export default conection;
