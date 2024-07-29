import React from "react";
// import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

const MainLayout: React.FC = () => {
  return (
    <div className="mx-auto container  ">
      <div className="flex  items-center justify-between py-3 ">
        <a href="" className="flex items-center">
          <h3 className="font-extrabold bg-green-600 p-2 rounded-md tracking-widest text-xl">
            E-Nursery
          </h3>
        </a>
        <NavigationMenu className="">
          <NavigationMenuList>
            <div className="flex justify-end">
              <div>
                <NavigationMenuItem>
                  <NavigationMenuLink className=" hover:text-green-600 hover:bg-[#bfedd0] delay-100 duration-300">
                    Movies
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </div>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default MainLayout;
