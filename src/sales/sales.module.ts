import { Module } from '@nestjs/common';
import { SaleService } from './application/sale.service';
import { SaleController } from './application/sale.controller';

@Module({
  controllers: [SaleController],
  providers: [SaleService],
  exports: [SaleService],
})
export class SalesModule {}
