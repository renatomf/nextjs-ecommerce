import { createTRPCRouter } from '../init';

import { authRouter } from '@/modules/auth/server/procedures';
import { categoriesRouter } from '@/modules/categories/server/procedures';
import { checkoutRouter } from '@/modules/checkout/server/procedures';
import { productsRouter } from '@/modules/products/server/procedures';
import { tagsRouter } from '@/modules/tags/server/procedures';
import { tenantsRouter } from '@/modules/tenants/ui/components/server/procedures';

export const appRouter = createTRPCRouter({
  auth: authRouter,
  categories: categoriesRouter,
  products: productsRouter,
  tags: tagsRouter,
  tenants: tenantsRouter,
  checkout: checkoutRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
