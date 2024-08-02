// import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import logo from "../../assets/icons/logo.png";

const Navbar: React.FC = () => {
  return (
    <div className="mx-auto">
      <div className="flex  items-center justify-between py-3 ">
        <div>
          <Input className="outline-none" type="text" placeholder="Search" />
        </div>
        <a href="" className="flex items-center">
          {/* <h3 className="font-extrabold hover:border-b-[1px] hover:border-[var(--bGreen)] p-2 rounded-md tracking-widest text-xl">
            E-Nursery
          </h3> */}
          <img src={logo} className="w-[300px] h-[100px]" alt="" />
        </a>
        <NavigationMenu className="">
          <NavigationMenuList>
            <div className="flex justify-end">
              <NavigationMenuItem>
                <NavigationMenuLink className="p-3 rounded-md font-medium hover:text-[var(--bGreen)] hover:bg-[var(--wGreen)] delay-75 duration-200 cursor-pointer hover:border-b-[1px] hover:border-b-[var(--bGreen)] mr-1">
                  Products
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
