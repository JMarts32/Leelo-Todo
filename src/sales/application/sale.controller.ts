import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { SaleService } from './sale.service';
import { Sale } from '../domain/schemas';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post()
  async createSale(@Body() data: Sale): Promise<void> {
    await this.saleService.registerSale(data);
  }

  @Get()
  async getSalesOfMonth(@Query('month') month: number): Promise<number> {
    return this.saleService.totalMonthSales(month);
  }
}
