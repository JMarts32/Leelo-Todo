import { z } from 'zod';

export const SaleBook = z.object({
  id: z.number().positive().int(),
  saleId: z.string(),
  bookId: z.string(),
  quantity: z.number().positive().int(),
  totalBookPrice: z.number().positive(),
});
export type SaleBook = z.infer<typeof SaleBook>;
