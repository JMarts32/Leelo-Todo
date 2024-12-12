import { z } from 'zod';
import { SaleBook } from 'src/shared/domain/schemas/sale-book';

export const Sale = z.object({
  id: z.string(),
  dateOfSale: z.date(), // Assuming DateTime translates to ISO date format
  totalPrice: z.number().positive(),
  books: z.array(SaleBook),
});
