import { z } from 'zod';

// Entity Schemas
export const Author = z.object({
  name: z.string().nonempty().max(100),
});
export type Author = z.infer<typeof Author>;
