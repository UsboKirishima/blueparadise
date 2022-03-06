import { createConnection } from 'typeorm';
import { typeOrmConfig } from './config';


const Database = async () => {
    const conn = await createConnection(typeOrmConfig);
    console.log('PG connected.');
    await conn.close();
    console.log('PG connection closed.');
}