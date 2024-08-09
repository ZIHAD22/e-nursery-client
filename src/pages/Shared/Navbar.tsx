// import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="mx-auto">
      <div className="flex  items-center justify-between py-3 ">
        <div>
          <Input className="outline-none" type="text" placeholder="Search" />
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
                <NavigationMenuLink className="p-3 rounded-md font-medium hover:text-[var(--bGreen)] hover:bg-[var(--wGreen)] delay-75 duration-200 cursor-pointer hover:border-b-[1px] hover:border-b-[var(--bGreen)] mr-1">
                  <Link to="/products">Products</Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="p-3 rounded-md font-medium hover:text-[var(--bGreen)] hover:bg-[var(--wGreen)] delay-75 duration-200 cursor-pointer hover:border-b-[1px] hover:border-b-[var(--bGreen)] mr-1">
                  Products
                </NavigationMenuLink>
                <NavigationMenuLink className="p-3 rounded-md font-medium hover:text-[var(--bGreen)] hover:bg-[var(--wGreen)] delay-75 duration-200 cursor-pointer hover:border-b-[1px] hover:border-b-[var(--bGreen)] mr-1">
                  Products
                </NavigationMenuLink>
                <NavigationMenuLink className="p-3 rounded-md font-medium hover:text-[var(--bGreen)] hover:bg-[var(--wGreen)] delay-75 duration-200 cursor-pointer hover:border-b-[1px] hover:border-b-[var(--bGreen)] mr-1">
                  Products
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
