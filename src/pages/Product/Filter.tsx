import { productData } from "../Home/Products";
import Selector from "./components/Selector";

const Filter = () => {
  return (
    <>
      <span className="text-gray-600">{productData.length} result found</span>
      <div className="flex justify-center items-center bg-[var(--wGreen)] rounded-xl py-2 font-bold">
        <span className="pr-3">Sort by:</span>
        <Selector />
      </div>
    </>
  );
};

export default Filter;
