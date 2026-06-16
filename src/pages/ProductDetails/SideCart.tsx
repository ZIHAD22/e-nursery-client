import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CatalogProduct, catalogProducts } from "@/data/products";

const SideCart = ({
  children,
  product = catalogProducts[0],
}: {
  children: ReactNode;
  product?: CatalogProduct;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full border-l border-[#d9ddd5] bg-white p-7 text-[#13231c] dark:border-[#315341] dark:bg-[#0f1814] dark:text-[#eef7ef] sm:max-w-[430px]">
        <div className="flex h-full flex-col justify-between">
          <div>
            <SheetHeader>
              <SheetTitle className="text-3xl font-bold text-[#13b94b]">
                Added to Cart!
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="size-28 rounded object-cover"
              />
              <div>
                <h3 className="text-xl font-bold leading-tight text-[#303447] dark:text-[#eef7ef]">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-[#6b6f68] dark:text-[#b9c8bd]">{product.subtitle}</p>
                <p className="mt-2 font-bold text-[#173f2d] dark:text-[#63d857]">{product.price}</p>
                <div className="mt-4 inline-flex items-center gap-4 rounded-md border border-[#13b94b] px-3 py-1 font-bold text-[#13b94b]">
                  <span>+</span>
                  <span>1</span>
                  <span>-</span>
                </div>
              </div>
            </div>
          </div>
          <SheetFooter className="grid grid-cols-2 gap-3 sm:space-x-0">
            <SheetClose asChild>
              <Button className="w-full border-[#13b94b] text-[#13231c] dark:border-[#63d857] dark:bg-transparent dark:text-[#eef7ef]" variant="outline" type="submit">
                Continue Shopping
              </Button>
            </SheetClose>

            <Link to="/shopping-cart">
              <Button className="w-full bg-[#b6f6c9] text-[#13231c] dark:bg-[#63d857] dark:text-[#06100b]" variant="secondary">
                View Cart
              </Button>
            </Link>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideCart;
