const CartPriceTag = ({ name, price }: { name: string; price: string }) => {
  return (
    <div className="flex justify-between items-center py-2">
      <span>{name}:</span>
      <span>${price}</span>
    </div>
  );
};

export default CartPriceTag;
