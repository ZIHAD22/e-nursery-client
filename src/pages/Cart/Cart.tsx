import { loadStripe } from "@stripe/stripe-js";
import { Minus, Plus, ShieldCheck, Tag } from "lucide-react";
import { catalogProducts } from "@/data/products";

const cartItems = catalogProducts.slice(2, 5);

const Cart = () => {
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51L2f8xAFp5v3RslHgTzOGqjOAfv1kyE5opiPf1r9m2ZriJmOkkfLzabIjK5ssv9YmnJOKp7ELKYSCFis3jCpbUpm00hskgSQpV",
    );

    await stripe?.redirectToCheckout({ sessionId: "qqwqwqqwq" });
  };

  return (
    <main className="bg-white text-[#13231c]">
      <section className="mx-auto max-w-[1400px] px-4 py-12">
        <h1 className="text-4xl font-bold">My Cart</h1>
        <p className="mt-3 max-w-2xl text-[#6b6f68]">
          Review your selected nursery items, update quantities, and apply any
          coupon before checkout.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-5">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="grid gap-5 rounded-lg border border-[#d9ddd5] bg-white p-4 shadow-sm dark:border-[#315341] dark:bg-[#14241d] sm:grid-cols-[180px_1fr_auto]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full rounded-lg object-cover sm:w-44"
                />
                <div>
                  <h2 className="text-2xl font-bold leading-tight">
                    {item.name}
                  </h2>
                  <p className="mt-1 text-[#6b6f68]">{item.subtitle}</p>
                  <p className="mt-4 font-bold text-[#173f2d]">{item.price}</p>
                  <div className="mt-5 inline-flex items-center gap-5 rounded-md border border-[#13b94b] px-3 py-2 text-[#13b94b]">
                    <button className="grid size-8 place-items-center rounded border border-[#13b94b]">
                      <Plus size={16} />
                    </button>
                    <span className="text-xl font-bold">1</span>
                    <button className="grid size-8 place-items-center rounded border border-[#13b94b]">
                      <Minus size={16} />
                    </button>
                  </div>
                </div>
                <button className="self-start text-sm font-bold text-[#6b6f68] hover:text-[#173f2d]">
                  Remove
                </button>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-lg border border-[#d9ddd5] bg-[#f7f8f3] p-6 text-[#13231c] dark:border-[#315341] dark:bg-[#14241d] dark:text-[#eef7ef]">
            <div className="rounded-lg bg-[#05b84d] p-6 text-white">
              <div className="flex items-center gap-4">
                <ShieldCheck size={54} strokeWidth={1.6} />
                <div>
                  <h2 className="text-xl font-bold uppercase">
                    1 Year Warranty Secured
                  </h2>
                  <p className="mt-2">3 plants guaranteed</p>
                </div>
              </div>
              <label className="mt-6 flex items-center gap-3 font-semibold">
                <input type="checkbox" className="size-5 accent-white" />
                Add warranty for ৳3,600
              </label>
            </div>

            <div className="mt-6">
              <label className="font-semibold">Apply coupon code:</label>
              <div className="mt-2 flex">
                <input
                  className="min-w-0 flex-1 rounded-l-md border border-[#d9ddd5] bg-white px-4 py-3 text-[#13231c] outline-none dark:border-[#315341] dark:bg-[#0f1814] dark:text-[#eef7ef]"
                  placeholder="Coupon Code"
                />
                <button className="grid w-14 place-items-center rounded-r-md bg-[#b6f6c9] text-[#173f2d] dark:bg-[#63d857] dark:text-[#06100b]">
                  <Tag size={20} />
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-lg">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>৳30,500</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>৳350</span>
              </div>
              <div className="flex justify-between">
                <span>Warranty:</span>
                <span>৳3,600</span>
              </div>
              <div className="border-t border-[#d9ddd5] pt-4">
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total:</span>
                  <span>৳34,450</span>
                </div>
              </div>
            </div>

            <button
              onClick={makePayment}
              className="mt-7 h-12 w-full rounded-md bg-[#173f2d] font-bold text-white dark:bg-[#63d857] dark:text-[#06100b]"
            >
              Checkout Now
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Cart;
