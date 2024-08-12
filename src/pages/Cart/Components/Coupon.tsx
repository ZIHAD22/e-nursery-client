import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RxDoubleArrowRight } from "react-icons/rx";

const Coupon = () => {
  return (
    <div className="">
      <style>
        {` 
                    .coupon::placeholder { 
                        letter-spacing:normal; 
                    }`}
      </style>
      <h6 className="mb-2">Apply coupon code:</h6>
      <div className="flex w-full items-center space-x-2">
        <Input
          className="h-10 w-full text-base tracking-[50px] coupon"
          type="text"
          placeholder="Coupon Code"
        />
        <Button variant="secondary">
          <RxDoubleArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Coupon;
