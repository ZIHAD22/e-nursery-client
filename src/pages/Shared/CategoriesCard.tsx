import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import cardImg from "../../assets/images/CCard1.avif";

type TCateCard = {
  title: string;
  productCount: number;
};

const CategoriesCard = ({ title, productCount }: TCateCard) => {
  return (
    <Card className="w-[350px] my-5">
      <img src={cardImg} alt="" />
      <div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            Total Available products: {productCount}
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex justify-end">
          <Button className="hover:bg-[var(--bGreen)]">See Details</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default CategoriesCard;