import PageTitle from "../Shared/PageTitle";
import ProductCard from "../Shared/ProductCard";

type TProducts = {
  image: string;
  title: string;
  price: number;
  rating: number;
};

export const productData: TProducts[] = [
  {
    image:
      "https://www.thetreecenter.com/c/uploads/thuja-green-giant-blue-edit-2-jpg-340x453.avif",
    title: "Thuja Green Giant Lorem ipsum dolor sit amet.",
    price: 100,
    rating: 5,
  },
  {
    image:
      "https://www.thetreecenter.com/c/uploads/thuja-green-giant-blue-edit-2-jpg-340x453.avif",
    title: "Thuja Green Giant",
    price: 100,
    rating: 5,
  },
  {
    image:
      "https://www.thetreecenter.com/c/uploads/thuja-green-giant-blue-edit-2-jpg-340x453.avif",
    title: "Thuja Green Giant",
    price: 100,
    rating: 5,
  },
  {
    image:
      "https://www.thetreecenter.com/c/uploads/thuja-green-giant-blue-edit-2-jpg-340x453.avif",
    title: "Thuja Green Giant",
    price: 100,
    rating: 5,
  },
  {
    image:
      "https://www.thetreecenter.com/c/uploads/thuja-green-giant-blue-edit-2-jpg-340x453.avif",
    title: "Thuja Green Giant",
    price: 100,
    rating: 5,
  },
  {
    image:
      "https://www.thetreecenter.com/c/uploads/thuja-green-giant-blue-edit-2-jpg-340x453.avif",
    title: "Thuja Green Giant",
    price: 100,
    rating: 5,
  },
  {
    image:
      "https://www.thetreecenter.com/c/uploads/thuja-green-giant-blue-edit-2-jpg-340x453.avif",
    title: "Thuja Green Giant",
    price: 100,
    rating: 5,
  },
  {
    image:
      "https://www.thetreecenter.com/c/uploads/thuja-green-giant-blue-edit-2-jpg-340x453.avif",
    title: "Thuja Green Giant",
    price: 100,
    rating: 5,
  },
];

const Products = () => {
  return (
    <div>
      <div>
        <PageTitle sideName="Popular" mainName="Products" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {productData.map((product, key) => (
          <ProductCard
            key={key}
            image={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
