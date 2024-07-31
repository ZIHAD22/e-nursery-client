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
          <h3 className="font-extrabold bg-green-600 p-2 rounded-md tracking-widest text-xl">
            E-Nursery
          </h3>
        </a>
        <NavigationMenu className="">
          <NavigationMenuList>
            <div className="flex justify-end">
              <NavigationMenuItem>
                <NavigationMenuLink className="p-2 rounded-md font-medium hover:text-green-600 hover:bg-[#bfedd0] delay-75 duration-200 cursor-pointer hover:border-b-[1px] hover:border-b-green-600">
                  Products
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="p-2 rounded-md font-medium hover:text-green-600 hover:bg-[#bfedd0] delay-75 duration-200 cursor-pointer hover:border-b-[1px] hover:border-b-green-600">
                  Products
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="p-2 rounded-md font-medium hover:text-green-600 hover:bg-[#bfedd0] delay-75 duration-200 cursor-pointer hover:border-b-[1px] hover:border-b-green-600">
                  Products
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="p-2 rounded-md font-medium hover:text-green-600 hover:bg-[#bfedd0] delay-75 duration-200 cursor-pointer hover:border-b-[1px] hover:border-b-green-600">
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
