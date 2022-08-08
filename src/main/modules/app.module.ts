import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductHandlerModule } from 'src/application/handlers/product-handler.module';
import { config } from '../config';
import { ProductsController } from '../controllers/products.controller';

@Module({
    imports: [
        ConfigModule.forRoot({ load: [config] }),
        TypeOrmModule.forRoot(config().database.getConnectionOptions()),
        ProductHandlerModule,
    ],
    controllers: [ProductsController],
})
export class AppModule {}
