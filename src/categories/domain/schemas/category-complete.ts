import { z } from 'zod';

export const CategoryComplete = z.object({
  id: z.string(),
  name: z.string().nonempty(),
});
export type CategoryComplete = z.infer<typeof CategoryComplete>;
