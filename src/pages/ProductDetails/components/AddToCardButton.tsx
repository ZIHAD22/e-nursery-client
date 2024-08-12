import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa";
const AddToCardButton = () => {
  return (
    <div className="flex justify-evenly items-center">
      <div className="flex justify-between items-center border border-[var(--bGreen)] w-[170px] px-2 py-[7px] rounded-md">
        <Button variant="outline" className="font-bold">
          <FaPlus />
        </Button>
        <span className="text-[var(--bGreen)] font-medium text-[30px]">0</span>
        <Button variant="outline" className="font-bold">
          <FaMinus />
        </Button>
      </div>
      <div className="">
        <Button variant="outline" className="py-7 w-[200px]">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default AddToCardButton;
