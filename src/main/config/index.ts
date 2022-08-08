import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import path from 'path';
import { Product } from 'src/infra/db/mongodb/entities/product.entity';

export const config = () => ({
    // Database environment
    database: {
        username: process.env.db_user,
        password: process.env.db_password,
        name: process.env.db_name,
        host: process.env.db_host,

        getConnectionOptions: (): TypeOrmModuleOptions => {
            const { host, name, username, password } = config().database;

            return {
                useUnifiedTopology: true,
                type: 'mongodb',
                url: `mongodb+srv://${username}:${password}@${host}/${name}`,
                retryWrites: true,
                w: 'majority',
                entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
                synchronize: true,
            };
        },
    },
});
