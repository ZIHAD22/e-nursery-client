import { IoSearchOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

const PriceFilter = () => {
  return (
    <div className="rounded-xl bg-[var(--wGreen)] px-4 py-2">
      <div className="mb-4">
        <h1 className="text-xl font-semibold">Price Range</h1>
        <span className="text-sm text-gray-500">
          Deploy your new project in one-click.
        </span>
      </div>
      <div>
        <form>
          <div className="flex">
            <div>
              <Input id="name" className="h-10 text-sm" placeholder="Min" />
            </div>
            <div className="px-2">
              <Input id="name" className="h-10 text-sm" placeholder="Max" />
            </div>

            <Button variant="outline" className="text-[var(--bGreen)] mb-4">
              <IoSearchOutline />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PriceFilter;
