import { productData } from "../Home/Products";
import ProductCard from "../Shared/ProductCard";
import Filter from "./Filter";

const Product = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="mt-4">
        <Filter />
      </div>
      <div className="col-span-3 ">
        <div className="grid grid-cols-3 gap-4">
          {productData.map((product, key) => (
            <ProductCard
              key={key}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
              width="300px"
              hight="300px"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
