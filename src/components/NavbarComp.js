"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
export const NavbarComp = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flexd items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          {/* <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
              width={100}
              height={100}
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a> */}
        </div>
        <div className="flexs lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* navbar */}
        <div className="flex justify-center hidden lg:flex lg:gap-x-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-5 w-100 rounded-full">
          <div className="space-y-0 flex">
            {/* <!-- Dropdown 1 --> */}
            <div className="relative inline-block text-left">
              <div className="group inline-flex">
                <a
                  href="!#"
                  className="inline-flex items-center px-4 py-2 border-none text-sm font-medium hover:bg-gray-0 text-white  focus:outline-none focus:ring focus:ring-indigo-300"
                >
                  Product
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
                <div className="origin-top-right absolute right-0 mt-14 w-40 rounded-md shadow-lg bg-none ring-1 ring-black ring-opacity-5 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    >
                      Option 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover-bg-indigo-100"
                    >
                      Option 3
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Dropdown 2 --> */}
            <div className="relative inline-block text-left  items-center">
              <div className="group inline-flex">
                <a
                  href="!#"
                  className="inline-flex items-center px-4 py-2 border-none text-sm font-medium hover:bg-gray-0 text-white  focus:outline-none focus:ring focus:ring-indigo-300"
                >
                  Features
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
                <div className="origin-top-right absolute right-0 mt-14 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    >
                      Option A
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    >
                      Option B
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    >
                      Option C
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Dropdown 3 --> */}
            <div className="relative inline-block text-left">
              <div className="group inline-flex">
                <a
                  href="!#"
                  className="inline-flex items-center px-4 py-2 border-none text-sm font-medium hover:bg-gray-0 text-white  focus:outline-none focus:ring focus:ring-indigo-300"
                >
                  Marketplace
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
                <div className="origin-top-right absolute right-0 mt-14 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    >
                      Choice X
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    >
                      Choice Y
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    >
                      Choice Z
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Dropdown 4 --> */}
            <div className="relative inline-block text-left">
              <div className="group inline-flex">
                <a
                  href="!#"
                  className="inline-flex items-center px-4 py-2 border-none text-sm font-medium hover:bg-gray-0 text-white  focus:outline-none focus:ring focus:ring-indigo-300"
                >
                  Company
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
                <div className="origin-top-right absolute right-0 mt-14 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    >
                      Item 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    >
                      Item 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    >
                      Item 3
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
