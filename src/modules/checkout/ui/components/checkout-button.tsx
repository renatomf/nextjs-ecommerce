import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";

import { cn, generateTenantURL } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCart } from "../../store/hooks/use-cart";

interface Props {
  className?: string;
  hideIfEmpty?: boolean;
  tenantSlug: string;
};

export const CheckoutButton = ({
  className,
  hideIfEmpty,
  tenantSlug,
}: Props) => {
  const { totalItems } = useCart(tenantSlug);

  if (hideIfEmpty && totalItems === 0) return null;

  return ( 
    <Button
      asChild
      variant="elevated"
      className={cn(
        "bg-white",
        className
      )}
    >
      <Link href={`${generateTenantURL(tenantSlug)}/checkout`}>
        <ShoppingCartIcon /> {totalItems > 0 ? totalItems : ""}
      </Link>
    </Button>
   );
};
