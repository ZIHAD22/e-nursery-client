// import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

const Navbar: React.FC = () => {
  return (
    <div className="mx-auto">
      <div className="flex  items-center justify-between py-3 ">
        <a href="" className="flex items-center">
          <h3 className="font-extrabold bg-[var(--bGreen)] p-2 rounded-md tracking-widest text-xl">
            E-Nursery
          </h3>
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
