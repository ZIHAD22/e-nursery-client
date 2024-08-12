import AddToCard from "./AddToCard";

const ProductDetails = () => {
  return (
    <div className="my-6 tracking-wide">
      <div className="grid grid-cols-2">
        <div className="bg-green w-[512px] h-[512px] text-center mx-auto">
          <img
            src="https://www.thetreecenter.com/c/uploads/thuja-green-giant-blue-edit-2-jpg-webp.avif"
            alt=""
            className="shadow-2xl rounded-xl"
          />
        </div>
        <div className="">
          <AddToCard />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
