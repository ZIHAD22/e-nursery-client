import MiniShopCart from "../Shared/MiniShopCart";
import Coupon from "./Components/Coupon";
import CartPriceTag from "./Components/CartPriceTag";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">My Cart</h1>
      <div className="flex justify-between">
        <div className="w-[60%]">
          <MiniShopCart />
          <MiniShopCart />
          <MiniShopCart />
          <MiniShopCart />
        </div>
        <div className="w-[40%] font-mono">
          <div>
            <Coupon />
          </div>
          <div>
            <CartPriceTag name="Shipping" price="29.95" />
            <CartPriceTag name="Shipping" price="29.95" />
            <CartPriceTag name="Shipping" price="29.95" />
            <hr />
            <CartPriceTag name="Total" price="200" />
          </div>
          <div className="text-center w-full">
            <Link to="/">
              <Button className="w-full" variant="outline">
                Checkout Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
