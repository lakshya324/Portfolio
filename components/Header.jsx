import Link from "next/link";
import React from "react";

// Components
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Lakshya <span className="text-accent">Sharma</span>
          </h1>
        </Link>

        {/* Destop Navigation */}
        <div className="hidden xl:flex items-center gap-3">
          <Nav />
          {/* Hire Me Button */}
          <Link href="https://www.linkedin.com/in/lakshyasharma3/">
            <Button className="ml-4">LinkedIn</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
