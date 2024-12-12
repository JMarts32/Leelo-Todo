import { z } from 'zod';

export const BookFilters = z.object({
  authorId: z.string().optional(),
  categoryId: z.string().optional(),
});
export type BookFilters = z.infer<typeof BookFilters>;
