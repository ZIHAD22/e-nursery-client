import { Button } from "@/components/ui/button";
import CategoriesCard from "../Shared/CategoriesCard";
import PageTitle from "../Shared/PageTitle";

const cardInfo = [
  {
    title: "Japanese Maple Trees",
    productCount: 26,
  },
  {
    title: "Japanese Maple Trees",
    productCount: 26,
  },
  {
    title: "Japanese Maple Trees",
    productCount: 26,
  },
  {
    title: "Japanese Maple Trees",
    productCount: 26,
  },
  {
    title: "Japanese Maple Trees",
    productCount: 26,
  },
  {
    title: "Japanese Maple Trees",
    productCount: 26,
  },
  {
    title: "Japanese Maple Trees",
    productCount: 26,
  },
  {
    title: "Japanese Maple Trees",
    productCount: 26,
  },
];

const Categories = () => {
  return (
    <div>
      <div>
        <PageTitle sideName="Top" mainName="Categories" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {cardInfo.map((info) => (
          <CategoriesCard title={info.title} productCount={info.productCount} />
        ))}
      </div>
      <div className="text-center">
        <Button className="bg-[var(--bGreen)] w-[200px]">See More</Button>
      </div>
    </div>
  );
};

export default Categories;
