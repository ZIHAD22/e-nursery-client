import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa";

const MiniShopCart = () => {
  return (
    <div className="grid grid-cols-3 gap-2 mt-3 tracking-wide">
      <div className="min-w-[60%]">
        <img
          src="https://www.thetreecenter.com/c/uploads/thuja-green-giant-blue-edit-2-jpg-webp.avif"
          alt=""
          className="h-[130px] w-full opacity-90 delay-200 duration-75"
        />
      </div>
      <div className="col-span-2">
        <h4 className="text-xl font-bold text-gray-700">Thuja Green Giant</h4>
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
          <Button variant="outline" className="font-bold h-[15px] w-[30px] p-2">
            <FaMinus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MiniShopCart;
