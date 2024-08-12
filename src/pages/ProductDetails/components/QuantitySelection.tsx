import { Button } from "@/components/ui/button";
// import { SheetTrigger } from "@/components/ui/sheet";
import { FaMinus, FaPlus } from "react-icons/fa";
import SideCart from "../SideCart";

const QuantitySelection = () => {
  return (
    <div className="mb-5">
      <div className="mb-6">
        <h4 className="text-sm text-gray-600 font-medium ">SELECT SIZE</h4>
        <div className="">
          <Button
            variant="outline"
            className="text-gray-600 font-semibold mr-4 mt-3"
          >
            1-2 Foot
          </Button>
          <Button
            variant="outline"
            className="text-gray-600 font-semibold mr-4 mt-3"
          >
            1-2 Foot
          </Button>
          <Button
            variant="outline"
            className="text-gray-600 font-semibold mr-4 mt-3"
          >
            1-2 Foot
          </Button>
          <Button
            variant="outline"
            className="text-gray-600 font-semibold mr-4 mt-3"
          >
            1-2 Foot
          </Button>
          <Button
            variant="outline"
            className="text-gray-600 font-semibold mr-4 mt-3"
          >
            1-2 Foot
          </Button>
          <Button
            variant="outline"
            className="text-gray-600 font-semibold mr-4 mt-3"
          >
            1-2 Foot
          </Button>
          <Button
            variant="outline"
            className="text-gray-600 font-semibold mr-4 mt-3"
          >
            1-2 Foot
          </Button>
          <Button
            variant="outline"
            className="text-gray-600 font-semibold mr-4 mt-3"
          >
            1-2 Foot
          </Button>
          <Button
            variant="outline"
            className="text-gray-600 font-semibold mr-4 mt-3"
          >
            1-2 Foot
          </Button>
        </div>
      </div>
      <div className="mb-6">
        <h4 className="text-sm text-gray-600 font-medium">SELECT QUANTITY</h4>
        <div className="flex justify-between items-center border border-[var(--bGreen)] w-[170px] px-2 py-[7px] rounded-md mt-2">
          <Button variant="outline" className="font-bold">
            <FaPlus />
          </Button>
          <span className="text-[var(--bGreen)] font-medium text-[30px]">
            0
          </span>
          <Button variant="outline" className="font-bold">
            <FaMinus />
          </Button>
        </div>
      </div>
      <hr />
      <div className="text-center mt-3">
        <SideCart>
          <Button variant="outline" className="py-7 w-[200px]">
            Add to Cart
          </Button>
        </SideCart>
      </div>
    </div>
  );
};

export default QuantitySelection;
