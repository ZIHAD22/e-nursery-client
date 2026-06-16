import {
  Grid2X2,
  Grid3X3,
  Heart,
  LayoutGrid,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import { catalogProducts } from "@/data/products";
import SideCart from "../ProductDetails/SideCart";

const categories = [
  "Acer Trees For Sale",
  "All Nut Trees",
  "Amelanchier Trees For Sale",
  "Apple Trees For Sale",
  "Bare Root Fruit Trees",
  "Bare Root Native Trees",
  "Bare Root Ornamental Trees",
  "Beech Trees For Sale",
  "Cherry Blossom Trees",
  "Citrus Trees",
  "Evergreen Trees",
  "Hedging Plants",
  "Magnolia Trees",
  "Patio Trees For Sale",
];

const Divider = () => (
  <div className="mx-auto flex max-w-[1380px] items-center gap-4 px-4 py-8">
    <div className="h-px flex-1 bg-[#49d33f]" />
    <img src={logo} alt="" className="size-16 object-contain" />
    <div className="h-px flex-1 bg-[#49d33f]" />
  </div>
);

const TreeFinder = () => {
  const [query, setQuery] = useState("tree");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredCategories = useMemo(() => {
    return categories.filter((category) =>
      category.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  return (
    <main className="bg-white pb-20 text-[#13231c]">
      <section className="mx-auto max-w-[1400px] px-4 pb-14 pt-12">
        <h1 className="text-center text-4xl font-bold">Tree Finder</h1>
        <p className="mx-auto mt-5 max-w-5xl text-center text-lg font-medium leading-8">
          Our tree finder has been specially created to help you find the
          perfect tree, hedge or shrub. Simply use the range of filters and find
          the tree you desire. Whether you're after a specific citrus tree, a
          particular shaped shrub or perhaps a hedge that attracts wildlife, you
          can find it here! If you're struggling to decide on which tree to
          choose, we offer expert advice to help you select the right one for
          you.
        </p>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-base">
            <Link to="/" className="text-[#6d7470]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-bold">Shop</span>
          </div>
          <div className="flex flex-wrap items-center gap-8 font-semibold">
            <span>
              Show : <strong>9</strong>
              <span className="text-[#6d7470]"> / 12 / 18 / 24</span>
            </span>
            <div className="flex gap-3 text-[#b5b8b5]">
              <Grid2X2 />
              <LayoutGrid />
              <Grid3X3 />
            </div>
            <button className="inline-flex items-center gap-2">
              <SlidersHorizontal size={20} />
              Filters
            </button>
          </div>
        </div>
      </section>

      <Divider />

      <section className="relative mx-auto max-w-[1400px] px-4">
        <div className="relative z-20 mx-auto max-w-2xl">
          <div className="flex h-[54px] overflow-hidden rounded-full bg-[#eef0e9] ring-1 ring-transparent dark:bg-[#14241d] dark:ring-[#315341]">
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              className="min-w-0 flex-1 bg-transparent px-5 text-sm text-[#13231c] outline-none dark:text-[#eef7ef]"
              type="search"
              placeholder="Search trees"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="grid w-12 place-items-center text-[#13231c] dark:text-[#eef7ef]"
                aria-label="Clear search"
              >
                <X size={22} />
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen((current) => !current)}
              className="m-1 grid size-[46px] place-items-center rounded-full bg-[#173f2d] text-white dark:bg-[#63d857] dark:text-[#06100b]"
              aria-label="Search"
            >
              <Search size={24} />
            </button>
          </div>

          {isSearchOpen && (
            <div className="absolute left-6 right-6 top-[54px] max-h-[470px] overflow-y-auto rounded-b-lg border border-[#d9ddd5] bg-white text-[#13231c] shadow-lg dark:border-[#315341] dark:bg-[#14241d] dark:text-[#eef7ef]">
              <h2 className="border-b border-[#d9ddd5] px-4 py-3 font-bold">
                CATEGORIES
              </h2>
              {filteredCategories.map((category, index) => (
                <Link
                  key={`${category}-${index}`}
                  to="/products"
                  className="flex items-center justify-between px-4 py-3 text-base hover:bg-[#f0f0ee] dark:hover:bg-[#1e3a2c]"
                >
                  <span>
                    {category.split("Trees").map((part, partIndex, array) => (
                      <span key={`${part}-${partIndex}`}>
                        {part}
                        {partIndex < array.length - 1 && (
                          <span className="font-bold underline">Trees</span>
                        )}
                      </span>
                    ))}
                  </span>
                  <span className="text-[#8b8f8c] dark:text-[#b9c8bd]">→</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-[1400px] gap-7 px-4 sm:grid-cols-2 lg:grid-cols-5">
        {catalogProducts.map((product, index) => (
          <article
            key={`${product.name}-${index}`}
            className="group flex min-h-[500px] flex-col rounded-lg border border-[#e2e5df] bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <Link to={`/products/${product.id}`} className="relative overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="aspect-square w-full object-cover"
              />
              {product.badge && (
                <span className="absolute left-0 top-3 bg-white px-3 py-1 text-xs font-bold">
                  {product.badge}
                </span>
              )}
              <div className="absolute right-3 top-3 hidden overflow-hidden rounded-lg bg-white shadow-md group-hover:block">
                <button className="grid size-12 place-items-center border-b border-[#e2e5df]">
                  <Search size={22} />
                </button>
                <button className="grid size-12 place-items-center">
                  <Heart size={22} />
                </button>
              </div>
            </Link>
            <Link to={`/products/${product.id}`} className="mt-3 min-h-[58px] text-xl font-semibold leading-tight text-[#303030]">
              {product.name}
            </Link>
            <p className="mt-auto pt-5 font-bold text-[#173f2d]">{product.price}</p>
            <div className="mt-4 grid gap-2">
              <SideCart product={product}>
                <button className="w-full bg-[#173f2d] px-4 py-3 text-xs font-bold text-white">
                  Add to Basket
                </button>
              </SideCart>
              <Link
                to="/shopping-cart"
                className="w-full border border-[#173f2d] px-4 py-3 text-xs font-bold text-[#173f2d]"
              >
                Buy Now
              </Link>
            </div>
          </article>
        ))}
      </section>

      <div className="mt-12 flex justify-center">
        <button className="border border-[#d9ddd5] px-6 py-3 font-medium">
          Loading...
        </button>
      </div>
    </main>
  );
};

export default TreeFinder;
