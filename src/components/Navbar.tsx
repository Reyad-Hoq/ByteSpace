'use client';
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import {ShoppingBag} from '@gravity-ui/icons';
import Image from "next/image";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = (
    <>
    <li>
      <Link className="text-white hover:text-secondary/90 hover:underline decoration-secondary/80" href="#">Home</Link>
    </li>
    <li>
      <Link className="text-white hover:text-secondary/90 hover:underline decoration-secondary/90" href="#">Courses</Link>
    </li>
    <li>
      <Link className="text-white hover:text-secondary/90 hover:underline decoration-secondary/90" href="#">Creators</Link>
    </li>
    </>
  )
  return (
    <div className="w-full mx-auto flex items-center justify-between py-2 bg-primary text-white bg-grid-pattern"
>
       <nav className="sticky top-0 z-40 w-full">
      <header className="mx-auto flex h-20 md:max-w-9/12 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 no-underline">
            <Image
              src="/icon.png"
              alt="bytespace logo"
              width={120}
              height={80}
              className="w-6 h-6 md:w-8 md:h-8 object-contain relative -top-1.5"
            />
            <span className="font-bold text-white  text-lg md:text-2xl font-clash">ByteSpace</span>
          </Link>
          </div>
        </div>
        <ul className="hidden font-satoshi font-medium text-[16px] items-center gap-6 md:flex">
         {links}
        </ul>
        <div className="hidden text-[16px] font-satoshi items-center  gap-6 md:flex">
          <Link className="text-white hover:text-secondary/90 no-underline" href="#">Sign In</Link>
          <Link className="text-white hover:text-secondary/90 no-underline" href="#">Join Us</Link>
          <Link className="text-white hover:text-secondary/90 no-underline" href="#"> <ShoppingBag className="w-5 h-5" /> </Link>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links}
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Link href="#" className="block py-2 text-secondary">
                Sign In
              </Link>
              <Link className="block py-2 text-secondary">Join Us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;