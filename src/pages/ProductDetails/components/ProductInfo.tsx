import { Rating } from "@smastrom/react-rating";
import { FaRegCheckCircle } from "react-icons/fa";
const ProductInfo = () => {
  return (
    <div className="mb-5">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-2xl font-semibold mb-2">Thuja Green Giant</h1>
          <h5 className="text-sm text-gray-600 mb-4">
            Thuja standishii x plicata
          </h5>
          <h5 className="text-lg font-extrabold text-gray-700 mb-4">$24.50</h5>
          <div className="text-sm text-gray-600 flex items-center mb-6">
            <FaRegCheckCircle color="var(--bGreen)" />
            <h5 className="pl-1 font-medium">
              <span className="text-[var(--bGreen)]">In stock</span> - Ready to
              ship
            </h5>
          </div>
        </div>
        <div>
          <h5 className="text-xs text-gray-600">35052 reviews</h5>
          <Rating
            style={{ maxWidth: 100 }}
            value={5}
            readOnly={true}
            halfFillMode="svg"
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductInfo;
