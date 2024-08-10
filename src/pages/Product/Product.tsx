import { productData } from "../Home/Products";
import ProductCard from "../Shared/ProductCard";
import SearchCard from "./components/SearchCard";
import Filter from "./Filter";

const Product = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="">
        <Filter />
      </div>
      <div className="col-span-3 ">
        <div className="">
          <SearchCard />
        </div>
        <div className="grid grid-cols-3 gap-2 items-center">
          {productData.map((product, key) => (
            <ProductCard
              key={key}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
              width="300px"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
