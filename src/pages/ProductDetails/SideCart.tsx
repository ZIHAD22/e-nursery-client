import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa";
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
            <div className="grid grid-cols-3 gap-2 mt-3 tracking-wide">
              <div>
                <img
                  src="https://www.thetreecenter.com/c/uploads/thuja-green-giant-blue-edit-2-jpg-webp.avif"
                  alt=""
                  className="h-[130px]"
                />
              </div>
              <div className="col-span-2">
                <h4 className="text-xl font-bold text-gray-700">
                  Thuja Green Giant
                </h4>
                <h5 className="text-gray-500">1-2 Foot</h5>
                <h5 className="font-semibold">$24.50</h5>
                <div className="flex justify-between items-center border border-[var(--bGreen)] w-[120px] px-2 rounded-md mt-4">
                  <Button
                    variant="outline"
                    className="font-bold h-[15px] w-[30px] p-2 m-0"
                  >
                    <FaPlus size="10px" />
                  </Button>
                  <span className="text-[var(--bGreen)] font-medium text-[20px]">
                    0
                  </span>
                  <Button
                    variant="outline"
                    className="font-bold h-[15px] w-[30px] p-2"
                  >
                    <FaMinus />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <SheetFooter className="">
            <SheetClose asChild>
              <Button className="w-1/2" variant="outline" type="submit">
                Continue Shopping
              </Button>
            </SheetClose>

            <Link to="/shopping-carts" className="w-1/2">
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
