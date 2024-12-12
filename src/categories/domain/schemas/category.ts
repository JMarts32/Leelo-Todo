import { z } from 'zod';

export const Category = z.object({
  name: z.string().nonempty(),
});
export type Category = z.infer<typeof Category>;
