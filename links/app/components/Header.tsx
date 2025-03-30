"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(false);
  const [buttonAnimation, setButtonAnimation] = useState(false);
  const date = new Date();
  const year = date.getFullYear();

  // Handle animation timing
  useEffect(() => {
    if (mobileMenuOpen) {
      setMenuAnimation(true);
    } else {
      const timer = setTimeout(() => {
        setMenuAnimation(false);
      }, 300); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setButtonAnimation(true);
    setTimeout(() => setButtonAnimation(false), 300);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-10 flex justify-center">
      <header className="w-[80vw] max-w-7xl bg-[#7F5539]/75 border-2 border-[#9C6644] h-18 rounded-lg flex justify-between shadow-sm backdrop-blur-md">
        <Link href="/" className="flex items-center">
          <Image
            width={18}
            height={18}
            className="ml-6 transition duration-200 hover:opacity-75"
            alt="Link logo for header"
            src="/logos/header-logo.svg"
          />
        </Link>
        <NavigationMenu className="items-center justify-center md:mr-3.5">
          <NavigationMenuList className="font-bold text-[#EDE0D4] flex">
            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/docs/getting-started">
                  Getting started
                </NavigationMenuLink>
                <NavigationMenuLink href="/docs/changelog">
                  Changelog
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuTrigger>Links</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/links/our-links">
                  Our links
                </NavigationMenuLink>
                <NavigationMenuLink href="/links/newsletter">
                  Newsletter
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/discover/other-links">
                  Featured links
                </NavigationMenuLink>
                <NavigationMenuLink href="/discover/tips">
                  Tips
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuTrigger>Create</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/create/new-links">
                  New links
                </NavigationMenuLink>
                <NavigationMenuLink href="/create/customize">
                  Customize
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/contact/support">
                  Support
                </NavigationMenuLink>
                <NavigationMenuLink href="/contact/feedback">
                  Feedback
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <button onClick={toggleMobileMenu} className="flex md:hidden mr-6 ml-2.5">
            <Image
              width={28}
              height={28}
              alt="Hamburger menu"
              src="/icons/hamburger-menu.svg"
            />
          </button>
        </NavigationMenu>
      </header>

      {/* Full Screen Mobile Menu with Animation */}
      {menuAnimation && (
        <div
          className={`fixed inset-0 bg-[#EDE0D4] bg-[url("/images/texture.svg")] bg-cover bg-center z-50 md:hidden flex flex-col transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="flex justify-end p-6">
            <button
              onClick={toggleMobileMenu}
              className="text-[#7F5539] text-4xl transform transition-transform duration-300 hover:rotate-90"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <nav className="flex-1 flex items-center justify-center">
            <ul className="space-y-8 text-center text-[#7F5539] text-2xl font-bold">
              <li
                className="transform transition-all duration-300 hover:scale-110"
                style={{ animationDelay: "100ms" }}
              >
                <h1>
                  <Link
                    href="/explore"
                    className="block p-2 transition duration-200 hover:text-[#9C6644]"
                    onClick={toggleMobileMenu}
                  >
                    Explore
                  </Link>
                </h1>
              </li>
              <li
                className="transform transition-all duration-300 hover:scale-110"
                style={{ animationDelay: "300ms" }}
              >
                <h1>
                  <Link
                    href="/create"
                    className="block p-2 transition duration-200 hover:text-[#9C6644]"
                    onClick={toggleMobileMenu}
                  >
                    Create
                  </Link>
                </h1>
              </li>
              <li
                className="transform transition-all duration-300 hover:scale-110"
                style={{ animationDelay: "400ms" }}
              >
                <h1>
                  <Link
                    href="/#faq"
                    className="block p-2 transition duration-200 hover:text-[#9C6644]"
                    onClick={toggleMobileMenu}
                  >
                    FAQ
                  </Link>
                </h1>
              </li>
              <li
                className="transform transition-all duration-300 hover:scale-110"
                style={{ animationDelay: "400ms" }}
              >
                <h1>
                  <Link
                    href="/#contact"
                    className="block p-2 transition duration-200 hover:text-[#9C6644]"
                    onClick={toggleMobileMenu}
                  >
                    Contact
                  </Link>
                </h1>
              </li>
            </ul>
          </nav>

          <div className="pb-10 text-center text-[#7F5539] opacity-70">
            <p className="font-bold">&copy; {year} Links</p>
          </div>
        </div>
      )}
    </div>
  );
}
