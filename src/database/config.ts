import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import Passwords from './models/Passwords';

const typeOrmConfig: PostgresConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "typeormtest",
    password: "password",
    database: "typeormtest",
    synchronize: true,
    logging: false,
    entities: [
        Passwords
    ]
};

export { typeOrmConfig };