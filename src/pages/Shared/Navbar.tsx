import { Input } from "@/components/ui/input";
import { FaCartShopping } from "react-icons/fa6";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="mx-auto">
      <div className="flex  items-center justify-between py-3 ">
        <div>
          <Input className="" type="text" placeholder="Search" />
        </div>
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} className="w-[210px] h-[100px]" alt="" />
          </Link>
        </div>
        <NavigationMenu className="">
          <NavigationMenuList>
            <div className="flex justify-end">
              <NavigationMenuItem>
                <Link
                  to="/products"
                  className="p-3 rounded-md font-medium hover:text-[var(--bGreen)] hover:bg-[var(--wGreen)] delay-75 duration-200 cursor-pointer hover:border-b-[1px] hover:border-b-[var(--bGreen)] mr-1"
                >
                  Products
                </Link>
                <Link
                  to="/"
                  className="p-3 rounded-md font-medium hover:text-[var(--bGreen)] hover:bg-[var(--wGreen)] delay-75 duration-200 cursor-pointer hover:border-b-[1px] hover:border-b-[var(--bGreen)] mr-1"
                >
                  Products
                </Link>
                <Link
                  to="/"
                  className="p-3 rounded-md font-medium hover:text-[var(--bGreen)] hover:bg-[var(--wGreen)] delay-75 duration-200 cursor-pointer hover:border-b-[1px] hover:border-b-[var(--bGreen)] mr-1"
                >
                  Products
                </Link>
                <Link
                  to="/"
                  className="p-3 rounded-md font-medium text-[var(--bGreen)] hover:bg-[var(--wGreen)] delay-75 duration-200 cursor-pointer border border-[var(--bGreen)] mr-1"
                >
                  <FaCartShopping size="20px" className="inline-block" />
                  <span className="text-[20px] pl-2">0</span>
                </Link>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
