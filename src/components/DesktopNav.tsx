
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface DesktopNavProps {
  getSectionUrl: (sectionId: string) => string;
}

const DesktopNav = ({ getSectionUrl }: DesktopNavProps) => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <NavigationMenu>
        <NavigationMenuList>
          {/* Employers Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-agr-darkgray hover:text-agr-blue text-base font-medium">
              Employers
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4">
                <li>
                  <NavigationMenuLink asChild>
                    <a href="/employers" className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-base font-medium hover:bg-muted">
                      <span>Overview</span>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="/employers/faqs" className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-base font-medium hover:bg-muted">
                      <span>FAQs</span>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Brokers Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-agr-darkgray hover:text-agr-blue text-base font-medium">
              Brokers
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4">
                <li>
                  <NavigationMenuLink asChild>
                    <a href="/brokers" className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-base font-medium hover:bg-muted">
                      <span>Overview</span>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="/brokers/faqs" className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-base font-medium hover:bg-muted">
                      <span>FAQs</span>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <a href={getSectionUrl('products')} className="text-agr-darkgray hover:text-agr-blue text-base font-medium px-3 py-2">Solutions</a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href={getSectionUrl('coverage')} className="text-agr-darkgray hover:text-agr-blue text-base font-medium px-3 py-2">Coverage</a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/about" className="text-agr-darkgray hover:text-agr-blue text-base font-medium px-3 py-2">About</a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNav;
