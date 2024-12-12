import { Module } from '@nestjs/common';
import { SaleService } from './application/sale.service';

@Module({
  providers: [SaleService],
  exports: [SaleService],
})
export class SalesModule {}
