import {
  Flame,
  Heart,
  Lightbulb,
  MessageSquareText,
  Search,
  Sprout,
  Star,
  TreePine,
  Truck,
} from "lucide-react";
import logo from "../../assets/icons/logo.png";
import { catalogProducts } from "@/data/products";
import SideCart from "../ProductDetails/SideCart";

const heroImage =
  "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=2200&q=85";

const bestSellingProducts = catalogProducts.slice(2, 7);

const featureCards = [
  {
    title: "Our Roses",
    text: "A wide range of colours and special varieties for you to choose from.",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Best Trees For Small Gardens",
    text: "A selection of our favourite trees for small spaces and gardens.",
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "The Perfect Father's Day Gifts",
    text: "Take a look at our expert selection.",
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=900&q=80",
  },
];

const reasons = [
  {
    icon: Flame,
    title: "Trees of Interest",
    text: "Take a look at our top selections for the upcoming month.",
  },
  {
    icon: Truck,
    title: "Meeting Expectations",
    text: "What not to expect is a fully formed 30ft tree in the post! Take a look at how we send your soon to be beautiful tree.",
  },
  {
    icon: MessageSquareText,
    title: "Friendly Advice",
    text: "We're always happy to help. Use this form to tell us more and we'll be back to you soon.",
  },
  {
    icon: Lightbulb,
    title: "Helpful How To",
    text: "Dip into our Advice & Guides where we share our latest tips, advice and upcoming trends to look out for.",
  },
];

const Divider = () => (
  <div className="mx-auto flex max-w-[1380px] items-center gap-4 px-4 py-10">
    <div className="h-px flex-1 bg-[#49d33f]" />
    <img src={logo} alt="" className="size-16 object-contain" />
    <div className="h-px flex-1 bg-[#49d33f]" />
  </div>
);

const Home = () => {
  return (
    <main className="overflow-hidden bg-white">
      <section
        className="relative min-h-[430px] bg-cover bg-center md:min-h-[485px]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/15" />
        <div className="relative mx-auto flex min-h-[430px] max-w-[1400px] flex-col items-center justify-center px-4 text-center text-white md:min-h-[485px]">
          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Father's Day is almost here...
          </h1>
          <a
            href="/products"
            className="mt-6 inline-flex items-center gap-3 bg-[#173f2d] px-7 py-3 text-xl font-semibold text-white"
          >
            Shop All Trees <Search size={25} />
          </a>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-medium md:text-base">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((item) => (
                <span
                  key={item}
                  className="grid size-9 place-items-center rounded-full border-2 border-white bg-[#d9c0a6] text-xs text-[#173f2d]"
                >
                  {item}
                </span>
              ))}
            </div>
            <span>Rated 4.9 / 5 based on 374 reviews</span>
            <span className="flex items-center gap-1 text-xl font-bold">
              <Star className="fill-[#00b67a] text-[#00b67a]" size={24} />
              Trustpilot
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-8">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Best Selling This Month
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {bestSellingProducts.map((product) => (
              <article
                key={product.id}
                className="group flex min-h-[470px] flex-col rounded-lg border border-[#d9ddd5] bg-white p-4 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <a
                  href={`/products/${product.id}`}
                  className="relative aspect-square overflow-hidden rounded-lg bg-[#eef0e9]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 bg-red-600 px-3 py-1 text-xs font-bold text-white">
                    LOOKING GOOD
                  </span>
                  <span className="absolute right-3 top-3 hidden rounded-lg bg-white p-3 shadow-md group-hover:block">
                    <Heart size={20} />
                  </span>
                </a>
                <a
                  href={`/products/${product.id}`}
                  className="mt-4 min-h-[54px] text-lg font-bold leading-tight"
                >
                  {product.name}
                </a>
                <p className="mt-auto pt-4 font-bold text-[#173f2d]">
                  {product.price}
                </p>
                <div className="mt-4 grid gap-2">
                  <SideCart product={product}>
                    <button className="w-full bg-[#173f2d] px-4 py-3 text-xs font-bold text-white">
                      Add to Basket
                    </button>
                  </SideCart>
                  <a
                    href="/shopping-cart"
                    className="w-full border border-[#173f2d] px-4 py-3 text-xs font-bold text-[#173f2d]"
                  >
                    Buy Now
                  </a>
                </div>
              </article>
            ))}
        </div>
        <div className="mt-5 flex justify-center gap-3">
          <span className="size-2.5 rounded-full bg-[#404040]" />
          <span className="size-2.5 rounded-full border-2 border-[#bdbdbd]" />
          <span className="size-2.5 rounded-full border-2 border-[#bdbdbd]" />
        </div>
      </section>

      <Divider />

      <section className="mx-auto grid max-w-[1400px] gap-5 px-4 pb-14 md:grid-cols-3">
        {featureCards.map((card) => (
          <article
            key={card.title}
            className="flex min-h-[510px] flex-col rounded-lg border border-[#d9ddd5] bg-white p-6 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={card.image}
              alt={card.title}
              className="mx-auto aspect-[1.45] w-full rounded-lg object-cover"
            />
            <h3 className="mt-5 text-xl font-bold">{card.title}</h3>
            <p className="mx-auto mt-3 max-w-md text-base leading-7">
              {card.text}
            </p>
            <a
              href="/products"
              className="mx-auto mt-auto inline-flex bg-[#173f2d] px-6 py-3 font-semibold text-white"
            >
              Shop Now
            </a>
          </article>
        ))}
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="max-w-3xl text-2xl font-medium leading-relaxed md:text-[28px]">
            We are a family-run business, set up in 1998, with twin objectives of
            harnessing our love of horticulture and, in some small way, caring
            for the increasingly damaged environment.
          </p>
          <a
            href="/products"
            className="mt-7 inline-flex bg-[#173f2d] px-6 py-3 font-semibold uppercase text-white"
          >
            Find out more
          </a>
        </div>
        <div className="flex items-center gap-6 rounded-lg bg-[#b4ff69] p-7">
          <div className="flex shrink-0 items-center text-[#10221a]">
            <Search size={58} strokeWidth={1.7} />
            <TreePine size={50} strokeWidth={1.7} />
          </div>
          <div>
            <h3 className="text-xl font-bold">Need Help?</h3>
            <p className="mt-5 text-2xl leading-snug">
              Use Our Tree Finder to inspire you
            </p>
            <a
              href="/products"
              className="mt-7 inline-flex bg-[#173f2d] px-6 py-3 font-semibold uppercase text-white"
            >
              Start Searching
            </a>
          </div>
        </div>
      </section>

      <Divider />

      <section className="bg-[#fbffd3] px-4 py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-center text-3xl font-bold">
            Why Choose Trees Direct
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, text }) => (
              <article key={title} className="flex min-h-[470px] flex-col text-center">
                <div className="mx-auto grid size-44 place-items-center rounded-full border-[5px] border-[#6b7078] bg-white">
                  <Icon size={72} strokeWidth={1.7} className="text-[#3f7f5a]" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{title}</h3>
                <p className="mx-auto mt-6 max-w-xs text-lg leading-8">{text}</p>
                <a
                  href="/products"
                  className="mx-auto mt-auto inline-flex bg-[#173f2d] px-6 py-3 font-semibold text-white"
                >
                  Find Out More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 py-14 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Tree Gifts</h2>
          <p className="mt-6 max-w-2xl text-xl font-bold leading-8">
            At Trees Direct we have the answer to any of your gift requirements.
            From christenings, in memory, or any form of celebration, let us help
            you.
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8">
            We have a superb collection of trees that make unusual but meaningful
            gifts for those who want to celebrate or remember an occasion with
            trees for life.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8">
            All our gifts come with a handwritten gift card and can have the gift
            wrapping of a hessian sack and ribbon as an optional extra.
          </p>
          <a
            href="/products"
            className="mt-6 inline-flex bg-[#173f2d] px-6 py-3 font-semibold text-white"
          >
            View Gifts
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=1000&q=80"
          alt="Tree gifts"
          className="mx-auto max-h-[430px] w-full rounded-lg object-cover"
        />
      </section>

      <section className="mx-auto grid max-w-[1400px] items-center gap-14 px-4 pb-24 pt-10 lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1599685315640-9ceab69a95a4?auto=format&fit=crop&w=1000&q=80"
          alt="Garden nursery"
          className="h-[520px] w-full rounded-lg object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold">Online Tree Specialists</h2>
          <p className="mt-6 max-w-2xl text-xl font-bold leading-8">
            We are a family business, set up in 1998, with twin objectives of
            harnessing our love of horticulture and, in some small way.
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8">
            Two decades on we have grown to become one of the UK's leading online
            trees retailers. with an ever expanding nursery and knowledgeable
            team. Many of our customers have stayed with us over the years but we
            are delighted to welcome new visitors in the early stages of their
            love affair with trees.
          </p>
          <a
            href="/products"
            className="mt-6 inline-flex bg-[#173f2d] px-6 py-3 font-semibold text-white"
          >
            Find out More
          </a>
        </div>
      </section>

      <a
        href="#"
        className="fixed bottom-6 right-5 grid size-12 place-items-center rounded-full bg-white text-[#173f2d] shadow-lg ring-1 ring-black/10"
        aria-label="Back to top"
      >
        <Sprout size={22} />
      </a>
    </main>
  );
};

export default Home;
