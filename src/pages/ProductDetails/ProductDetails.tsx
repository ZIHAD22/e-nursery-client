import { CheckCircle2, Heart, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "@/data/products";
import SideCart from "./SideCart";

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);

  return (
    <main className="bg-white text-[#13231c]">
      <section className="mx-auto max-w-[1400px] px-4 py-12">
        <div className="mb-8 text-sm font-medium">
          <Link to="/" className="text-[#6d7470]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="text-[#6d7470]">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-lg border border-[#d9ddd5] bg-[#f7f8f3] p-5 dark:border-[#315341] dark:bg-[#14241d]">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square w-full rounded-lg object-cover shadow-xl"
            />
          </div>

          <div>
            <span className="inline-flex rounded-full bg-[#b4ff69] px-4 py-1 text-sm font-bold text-[#173f2d]">
              Ready for Bangladesh delivery
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight">
              {product.name}
            </h1>
            <p className="mt-2 text-lg text-[#6b6f68]">{product.subtitle}</p>
            <p className="mt-6 text-3xl font-bold text-[#173f2d]">
              {product.price}
            </p>
            <div className="mt-5 flex items-center gap-2 text-base font-semibold">
              <CheckCircle2 size={20} className="text-[#13b94b]" />
              <span className="text-[#13b94b]">In stock</span>
              <span className="text-[#6b6f68]">- Ready to ship</span>
            </div>

            <div className="my-8 h-px bg-[#d9ddd5]" />

            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#6b6f68]">
                Select size
              </h2>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="min-w-[104px] rounded-md border border-[#173f2d] px-5 py-3 font-semibold text-[#173f2d] transition-colors hover:bg-[#173f2d] hover:text-white"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#6b6f68]">
                Select quantity
              </h2>
              <div className="mt-3 inline-flex items-center gap-6 rounded-md border border-[#173f2d] px-3 py-2 text-[#173f2d]">
                <button className="grid size-10 place-items-center rounded border border-[#173f2d]">
                  <Plus size={18} />
                </button>
                <span className="text-2xl font-bold">1</span>
                <button className="grid size-10 place-items-center rounded border border-[#173f2d]">
                  <Minus size={18} />
                </button>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-8">
              {product.description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <SideCart product={product}>
                <button className="h-12 bg-[#173f2d] px-6 font-bold text-white">
                  Add to Basket
                </button>
              </SideCart>
              <Link
                to="/shopping-cart"
                className="flex h-12 items-center justify-center border border-[#173f2d] px-6 font-bold text-[#173f2d]"
              >
                Buy Now
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg bg-[#eef0e9] p-4">
                <Truck className="text-[#173f2d]" />
                <span className="font-semibold">Nationwide delivery</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-[#eef0e9] p-4">
                <ShieldCheck className="text-[#173f2d]" />
                <span className="font-semibold">1 year plant warranty</span>
              </div>
            </div>

            <button className="mt-5 inline-flex items-center gap-2 font-semibold text-[#173f2d]">
              <Heart size={20} />
              Add to wishlist
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
