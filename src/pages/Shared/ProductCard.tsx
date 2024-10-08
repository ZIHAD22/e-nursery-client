import { Button } from "@/components/ui/button";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

type TProducts = {
  hight?: string;
  width?: string;
  image: string;
  title: string;
  price: number;
  rating: number;
};

const ProductCard = ({
  image,
  title,
  price,
  rating,
  hight,
  width,
}: TProducts) => {
  console.log(width);
  return (
    <Card className={`w-[${width ? width : "350px"}] overflow-hidden`}>
      <div>
        <img
          className={`object-cover w-full h-[${hight ? hight : "370px"}]`}
          src={image}
          alt=""
        />
      </div>
      <div className="">
        <CardHeader className="py-6 ps-6">
          <CardTitle className="text-[20px]">
            {title.length > 26 ? title.slice(0, 26) + "..." : title}
          </CardTitle>
        </CardHeader>

        <CardFooter className="flex justify-around">
          <CardDescription>
            <h4 className="text-[17px] mb-3 font-bold ps-1">Price: ${price}</h4>
            <span>
              <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly={true}
                halfFillMode="svg"
              />
            </span>
          </CardDescription>
          <Link to={`/products/${title.toLowerCase().replace(/\s+/g, "-")}`}>
            <Button variant="outline" className="">
              See Details
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProductCard;
