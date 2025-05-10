import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCart } from "@/modules/checkout/store/hooks/use-cart";

interface Props {
  tenantSlug: string;
  productId: string;
  isPurchased?: boolean;
};

export const CartButton = ({ tenantSlug, productId, isPurchased }: Props) => {
  const cart = useCart(tenantSlug);

  if (isPurchased) {
    return (
      <Button
        asChild
        variant="elevated"
        className="flex-1 font-medium bg-white"
        size="lg"
      >
        <Link prefetch href={`/library/${productId}`}>
          View in Library
        </Link>
      </Button>
    );
  }

  return ( 
    <Button
      size="lg"
      variant="elevated"
      className={cn(
        "flex-1 bg-pink-400",
        cart.isProductInCart(productId) && "bg-white"
      )}
      onClick={() => cart.toggleProduct(productId)}
    >
      {cart.isProductInCart(productId)
        ? "Remove from cart"
        : "Add to cart"
      }
    </Button>
   );
};
