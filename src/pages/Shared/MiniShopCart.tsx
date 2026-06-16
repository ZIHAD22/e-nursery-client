import { FaMinus, FaPlus } from "react-icons/fa";
import { catalogProducts } from "@/data/products";

const MiniShopCart = () => {
  const product = catalogProducts[2];

  return (
    <div className="mt-3 grid grid-cols-[96px_1fr] gap-4 tracking-wide">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="size-24 rounded object-cover"
        />
      </div>
      <div>
        <h4 className="text-lg font-bold text-[#303447]">{product.name}</h4>
        <h5 className="text-[#6b6f68]">{product.sizes[0]}</h5>
        <h5 className="font-semibold">{product.price}</h5>
        <div className="mt-4 flex w-[120px] items-center justify-between rounded-md border border-[#13b94b] px-2 py-1">
          <button className="font-bold">
            <FaPlus size="10px" />
          </button>
          <span className="text-[20px] font-medium text-[#13b94b]">1</span>
          <button className="font-bold">
            <FaMinus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniShopCart;
