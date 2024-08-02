import { Button } from "@/components/ui/button";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rating } from "@smastrom/react-rating";

type TProducts = {
  image: string;
  title: string;
  price: number;
  rating: number;
};

const ProductCard = ({ image, title, price, rating }: TProducts) => {
  return (
    <Card className="w-[350px] my-5">
      <img src={image} className="object-cover w-full h-[370px]" alt="" />
      <div className="flex justify-around">
        <CardHeader className="py-6 ps-6">
          <CardTitle className="text-[20px]">
            {title.length > 11 ? title.slice(0, 11) + "..." : title}
          </CardTitle>
          <CardDescription>
            <h4 className="text-[17px] font-bold ps-1">Price: ${price}</h4>
            <span>
              <Rating
                style={{ maxWidth: 250 }}
                value={rating}
                readOnly={true}
                halfFillMode="svg"
              />
            </span>
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex justify-end">
          <Button
            variant="outline"
            className="hover:bg-[var(--bGreen)] border-[var(--bGreen)]"
          >
            See Details
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProductCard;
