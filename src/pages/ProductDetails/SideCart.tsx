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
import MiniShopCart from "../Shared/MiniShopCart";

const SideCart = ({ children }: { children: ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <div className="grid grid-rows-2 h-full">
          <div>
            <SheetHeader>
              <SheetTitle className="text-2xl text-[var(--bGreen)]">
                Added to Cart!
              </SheetTitle>
            </SheetHeader>
            <MiniShopCart />
          </div>
          <SheetFooter className="">
            <SheetClose asChild>
              <Button className="w-1/2" variant="outline" type="submit">
                Continue Shopping
              </Button>
            </SheetClose>

            <Link to="/shopping-cart" className="w-1/2">
              <Button className="w-full" variant="secondary">
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
