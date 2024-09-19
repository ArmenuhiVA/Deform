"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import deformLogo from "../public/deform_logo.svg";


const navigation = [
  { name: "About", href: "/about", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Services", href: "/services", current: false },
  { name: "Awards", href: "/awards", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Contact", href: "/contact", current: false },
];


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const pathname = usePathname(); 

 
  const isActive = (path: string): boolean => pathname === path;

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-customWhite">
      <div className="lg:px-[100px]">
        <div className="relative flex items-center justify-between mt-[30px] border-b border-[#0000004D] h-16 max-w-[1240px] md:mx-auto px-6 lg:px-0">
          {/* Logo */}
          <Link href="/">
            <Image src={deformLogo} alt="Logo" />
          </Link>

          {/* Desktop navigation */}
          <div className="absolute hidden md:flex inset-y-0 right-0 items-center sm:static sm:inset-auto sm:pr-0">
            <div className="flex space-x-[40px] w-full">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`px-[10px] py-[18px] text-paragraph-s ${isActive(item.href) ? 'text-customWhite border-b border-customBlack' : 'text-black'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden px-6">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="md:hidden overflow-hidden transform origin-top">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          className="space-y-1 px-2 pb-3 pt-2"
        >
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={classNames(
                isActive(item.href)
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-6 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </motion.div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
