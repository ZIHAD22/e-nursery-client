import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";
import {
  ArrowRightCircle,
  ChevronDown,
  Heart,
  Menu,
  Moon,
  Search,
  ShoppingBag,
  Sun,
  TreePine,
  UserRound,
  X,
} from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { useState } from "react";

const megaMenus: Record<string, string[]> = {
  Trees: [
    "Citrus Trees",
    "Fruit & Nut Trees",
    "Native British Trees",
    "Evergreen Trees",
    "Ornamental Trees",
    "Patio Trees For Sale",
    "View All Trees A-Z",
  ],
  "Shrubs & Climbers": ["Climbers", "Camellia Shrubs", "Roses", "More Shrubs"],
  "Gifting and Memorials": [
    "Anniversary",
    "Birthday",
    "Christening",
    "Christmas",
    "Fathers Day",
    "Memorials",
    "Mothers Day",
    "Valentine's Day",
  ],
};

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const primaryLinks = [
    { label: "Meet Us", path: "/about" },
    { label: "Advice & Guides", path: "/advice-guides" },
    { label: "Wholesale", path: "/wholesale" },
    { label: "Contact Us", path: "/contact" },
    { label: "Login / Register", path: "/login" },
  ];

  const categoryLinks = [
    { label: "Tree Finder", path: "/tree-finder" },
    { label: "Trees", path: "/products" },
    { label: "Shrubs & Climbers", path: "/products" },
    { label: "Hedging", path: "/hedging" },
    { label: "Sale", path: "/sale" },
    { label: "Accessories", path: "/accessories" },
    { label: "Gifting and Memorials", path: "/gifting-and-memorials" },
    { label: "Gift Vouchers", path: "/gift-vouchers" },
  ];

  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-4 lg:px-6">
        <Link to="/" className="shrink-0" aria-label="Trees Direct home">
          <img
            src={logo}
            className="h-16 w-[240px] object-contain object-left md:h-20 lg:w-[320px]"
            alt="Trees Direct"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-end gap-5 text-[15px] font-semibold text-[#10221a] lg:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="group relative whitespace-nowrap rounded-md px-1 py-2 transition-colors hover:text-[#173f2d]"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#49d33f] transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            className="grid size-10 place-items-center rounded-full border border-[#173f2d] text-[#173f2d] transition-colors hover:bg-[#173f2d] hover:text-white"
            aria-label={
              theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
            }
            title={
              theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
            }
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link
            to="/"
            aria-label="Wishlist"
            className="grid size-10 place-items-center rounded-full transition-colors hover:bg-[#eef0e9] hover:text-[#173f2d]"
          >
            <Heart size={24} strokeWidth={1.8} />
          </Link>
          <Link
            to="/shopping-cart"
            className="flex items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-[#eef0e9]"
          >
            <span className="relative">
              <ShoppingBag size={25} strokeWidth={1.8} />
              <span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-[#173f2d] text-[10px] font-bold text-white">
                0
              </span>
            </span>
            <span className="font-semibold">৳0.00</span>
          </Link>
          <form className="flex h-11 w-[270px] bg-[#f0f1ea]">
            <input
              className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none"
              type="search"
              placeholder="Search for products"
            />
            <button
              className="grid w-12 place-items-center bg-[#173f2d] text-white"
              aria-label="Search"
              type="submit"
            >
              <Search size={22} />
            </button>
          </form>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            className="grid size-10 place-items-center rounded-full border border-[#173f2d]"
            aria-label={
              theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
            }
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <UserRound size={23} />
          <Link to="/shopping-cart" aria-label="Cart">
            <ShoppingBag size={24} />
          </Link>
          <button
            className="grid size-10 place-items-center rounded border border-[#173f2d]"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-[#d9ddd5] bg-white px-4 py-5 lg:hidden">
          <nav className="grid gap-2 text-base font-semibold text-[#10221a]">
            {[...primaryLinks, ...categoryLinks].map((link) => (
              <Link
                key={`mobile-${link.label}`}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md px-3 py-3 transition-colors hover:bg-[#eef0e9] hover:text-[#173f2d]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <div className="relative z-40 bg-[#49d33f]">
        <nav className="mx-auto hidden max-w-[1400px] items-center justify-between gap-4 px-4 py-0 text-[15px] font-semibold text-[#10221a] lg:flex">
          {categoryLinks.map((link) => {
            const dropdownItems = megaMenus[link.label];

            if (!dropdownItems) {
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className="flex min-h-[50px] items-center whitespace-nowrap rounded-lg px-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#173f2d] hover:text-white"
                >
                  {link.label}
                </Link>
              );
            }

            const firstColumn = dropdownItems.slice(
              0,
              Math.ceil(dropdownItems.length / 2),
            );
            const secondColumn = dropdownItems.slice(firstColumn.length);

            return (
              <div key={link.label} className="group">
                <Link
                  to={link.path}
                  className="flex min-h-[50px] items-center gap-1 whitespace-nowrap rounded-lg px-3 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:bg-[#173f2d] group-hover:text-white"
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    size={13}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </Link>

                <div className="invisible absolute left-1/2 top-full w-[min(72rem,calc(100vw-2rem))] -translate-x-1/2 pt-10 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="grid min-h-[285px] grid-cols-[1fr_1fr_424px] gap-20 rounded-lg bg-white px-7 py-7 shadow-[0_2px_14px_rgba(0,0,0,0.35)]">
                    {[firstColumn, secondColumn].map((column, columnIndex) => (
                      <div
                        key={columnIndex}
                        className="flex flex-col justify-center gap-2"
                      >
                        {column.map((item) => (
                          <Link
                            key={item}
                            to="/products"
                            className="flex items-center justify-between border-b border-[#d7ead9] py-3 text-base font-medium text-black transition-all hover:translate-x-1 hover:text-[#173f2d]"
                          >
                            <span>{item}</span>
                            <ArrowRightCircle
                              size={16}
                              className="fill-black text-white"
                            />
                          </Link>
                        ))}
                      </div>
                    ))}

                    <div className="flex items-center">
                      <div className="w-full bg-[#b4ff69] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.22)]">
                        <div className="grid grid-cols-[130px_1fr] gap-5">
                          <div className="flex items-center text-black">
                            <Search size={70} strokeWidth={1.7} />
                            <TreePine
                              size={60}
                              strokeWidth={1.7}
                              className="-ml-4 mt-10"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-black">
                              Need Help?
                            </h3>
                            <p className="mt-6 text-base font-medium leading-7 text-[#65786c]">
                              Use Our Tree Finder to inspire you
                            </p>
                          </div>
                        </div>
                        <Link
                          to="/products"
                          className="mt-8 flex h-11 items-center justify-center bg-[#173f2d] text-sm font-semibold uppercase text-white"
                        >
                          Find Out More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
        <form className="mx-auto flex max-w-[1400px] px-4 py-3 lg:hidden">
          <input
            className="min-w-0 flex-1 bg-white px-4 py-3 text-sm outline-none"
            type="search"
            placeholder="Search for products"
          />
          <button
            className="grid w-12 place-items-center bg-[#173f2d] text-white"
            aria-label="Search"
            type="submit"
          >
            <Search size={21} />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Navbar;
