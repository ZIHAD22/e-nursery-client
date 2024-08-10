import { RxCross2 } from "react-icons/rx";

const SearchCard = () => {
  return (
    <div className="bg-[var(--wGreen)] rounded-md inline-block relative px-4">
      <span className="text-[10px] py-0">Search</span>
      <h5 className="text-[13px] font-semibold truncate">Thuja Green Giant</h5>
      <span className="absolute top-0 right-[6px] cursor-pointer">
        <RxCross2 size="25px" />
      </span>
    </div>
  );
};

export default SearchCard;
