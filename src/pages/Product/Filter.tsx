import { productData } from "../Home/Products";
import PriceFilter from "./components/PriceFilter";
import Selector from "./components/Selector";

const Filter = () => {
  return (
    <>
      <h4 className="text-gray-600 mb-4">{productData.length} result found</h4>
      <div className="flex justify-center items-center bg-[var(--wGreen)] rounded-xl py-2 font-bold mb-3">
        <span className="pr-3">Sort by:</span>
        <Selector />
      </div>
      <div>
        <PriceFilter />
      </div>
    </>
  );
};

export default Filter;
