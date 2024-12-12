import { z } from 'zod';

export const Sale = z.object({
  books: z.array(
    z.object({
      bookId: z.string(),
      quantity: z.number(),
    }),
  ),
});
export type Sale = z.infer<typeof Sale>;
