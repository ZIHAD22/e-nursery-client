import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

type InfoPageProps = {
  title: string;
  intro: string;
  variant?: "about" | "advice" | "wholesale" | "contact" | "simple";
};

const Divider = () => (
  <div className="mx-auto flex max-w-[1380px] items-center gap-4 px-4 py-10">
    <div className="h-px flex-1 bg-[#49d33f]" />
    <img src={logo} alt="" className="size-16 object-contain" />
    <div className="h-px flex-1 bg-[#49d33f]" />
  </div>
);

const articleCards = [
  {
    title: "How Spending Time In The Garden Can Improve Your Mental Health",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Our Spring Planting Guide",
    image:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Designing Small Gardens: Best Trees for Limited Spaces",
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=900&q=80",
  },
];

const WholesaleContent = () => (
  <section className="mx-auto max-w-[1380px] px-4 pb-20">
    <div className="grid gap-10 rounded-lg bg-[#dededd] p-8 text-[#13231c] dark:border dark:border-[#315341] dark:bg-[#14241d] dark:text-[#eef7ef] md:grid-cols-[0.75fr_1.25fr]">
      <div className="leading-8">
        <p>
          We currently have stock available for bulk buy in certain native trees.
          Please get in touch for prices and more details.
        </p>
        <p className="mt-2 font-semibold italic">Hornbeam:</p>
        <p>285 x 3ft trees</p>
        <p>450 x 4 - 6ft trees</p>
        <p>50 x 6ft trees</p>
        <p>15 x 7 - 8ft trees</p>
        <p className="mt-2 font-semibold italic">Field Maple:</p>
        <p>200 x 3 - 6ft trees</p>
        <p>80 x 6ft trees</p>
        <p className="mt-2 font-semibold italic">Common Beech:</p>
        <p>3000 x 3ft trees</p>
        <p>300 x 4 - 6ft trees</p>
        <p>10 x 6ft trees</p>
        <div className="mt-6 space-y-3 font-semibold text-[#173f2d] dark:text-[#63d857]">
          <p className="flex items-center gap-3">
            <Phone size={18} /> 01584 878 878
          </p>
          <p className="flex items-center gap-3">
            <Mail size={18} /> info@treesdirect.co.uk
          </p>
        </div>
      </div>
      <form className="grid gap-5">
        {["Your name", "Your email", "Subject"].map((label) => (
          <label key={label} className="grid gap-2">
            <span>{label}</span>
            <input className="h-11 border border-transparent bg-[#d1d4cc] px-4 text-[#13231c] outline-none focus:border-[#49d33f] dark:border-[#315341] dark:bg-[#0f1814] dark:text-[#eef7ef]" />
          </label>
        ))}
        <label className="grid gap-2">
          <span>Your message (optional)</span>
          <textarea className="min-h-48 border border-transparent bg-[#d1d4cc] p-4 text-[#13231c] outline-none focus:border-[#49d33f] dark:border-[#315341] dark:bg-[#0f1814] dark:text-[#eef7ef]" />
        </label>
        <button className="w-fit rounded bg-[#173f2d] px-6 py-3 font-semibold text-white dark:bg-[#63d857] dark:text-[#06100b]">
          Submit
        </button>
      </form>
    </div>
  </section>
);

const InfoPage = ({ title, intro, variant = "simple" }: InfoPageProps) => {
  return (
    <main className="bg-white text-[#13231c]">
      <section className="mx-auto max-w-[1400px] px-4 py-16 text-center">
        <h1 className="text-5xl font-bold md:text-7xl">{title}</h1>
        <p className="mx-auto mt-8 max-w-4xl text-lg font-medium leading-8">
          {intro}
        </p>
      </section>

      {variant === "about" && (
        <section className="mx-auto max-w-[1180px] px-4 pb-8 text-lg leading-8">
          <p>
            Trees Direct was born in 1998. We are family-run, practical, and
            focused on helping customers choose trees that fit their gardens,
            celebrations, and long-term planting plans.
          </p>
          <p className="mt-6">
            We keep our pages clear, product-first, and easy to browse so every
            customer can move from inspiration to checkout without friction.
          </p>
        </section>
      )}

      {variant === "advice" && (
        <section className="mx-auto grid max-w-[1400px] gap-7 px-4 pb-16 md:grid-cols-3">
          {articleCards.map((card) => (
            <article key={card.title} className="text-center">
              <img
                src={card.image}
                alt={card.title}
                className="aspect-square w-full rounded-lg object-cover"
              />
              <h2 className="mt-5 text-xl font-bold">{card.title}</h2>
              <Link to="/advice-guides" className="mt-3 inline-flex font-semibold text-[#173f2d]">
                Continue reading
              </Link>
            </article>
          ))}
        </section>
      )}

      {variant === "wholesale" && <WholesaleContent />}

      {variant === "contact" && (
        <section className="mx-auto max-w-3xl px-4 pb-16">
          <form className="grid gap-5 rounded-lg bg-[#f1f0ea] p-8 text-[#13231c] dark:border dark:border-[#315341] dark:bg-[#14241d] dark:text-[#eef7ef]">
            {["Your name", "Your email", "Subject"].map((label) => (
              <label key={label} className="grid gap-2">
                <span>{label}</span>
                <input className="h-11 border border-[#d9ddd5] bg-white px-4 text-[#13231c] outline-none focus:border-[#49d33f] dark:border-[#315341] dark:bg-[#0f1814] dark:text-[#eef7ef]" />
              </label>
            ))}
            <label className="grid gap-2">
              <span>Your message</span>
              <textarea className="min-h-40 border border-[#d9ddd5] bg-white p-4 text-[#13231c] outline-none focus:border-[#49d33f] dark:border-[#315341] dark:bg-[#0f1814] dark:text-[#eef7ef]" />
            </label>
            <button className="w-fit rounded bg-[#173f2d] px-6 py-3 font-semibold text-white dark:bg-[#63d857] dark:text-[#06100b]">
              Send Message
            </button>
          </form>
        </section>
      )}

      {variant === "simple" && (
        <section className="mx-auto max-w-[1200px] px-4 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {["Shop curated plants", "Compare options", "Order with confidence"].map((item) => (
              <div key={item} className="rounded-lg border border-[#d9ddd5] bg-white p-7 text-center">
                <h2 className="text-xl font-bold">{item}</h2>
                <p className="mt-3 text-[#6b6f68]">
                  Explore the latest nursery selections and find the right match
                  for your garden.
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <Divider />
    </main>
  );
};

export default InfoPage;
