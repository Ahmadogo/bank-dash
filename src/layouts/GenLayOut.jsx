import { useState } from "react";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { TiHome } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import { TbDeviceIpadDollar } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { FaCreditCard } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import BankDashLogo from "../assets/svg/bankDash-logo.svg";
import NavUserIcon from "../assets/svg/navUser-icon.svg";
import PagesTitle from "../components/PageTitle";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    src: <TiHome />,
  },

  {
    name: "Transactions",
    href: "/transactions",
    src: <TbDeviceIpadDollar />,
  },

  {
    name: "Accounts",
    href: "/accounts",
    src: <FaUser />,
  },
  {
    name: "Investments",
    href: "/investments",
    src: <GiNetworkBars />,
  },
  {
    name: "Credit Cards",
    href: "/credit-card",
    src: <FaCreditCard />,
  },

  {
    name: "Loans",
    href: "/loans",
    src: <FaHandHoldingDollar />,
  },

  {
    name: "Services",
    href: "/services",
    src: <FaTools />,
  },
  {
    name: "My Previlages",
    href: "/previlages",
    src: <RiLightbulbFlashLine />,
  },
  {
    name: "Setting",
    href: "/settings",
    src: <IoSettingsOutline />,
  },
];

const userNavigation = [
  {
    name: "Your Profile",
    href: "/profile",
  },
  {
    name: "Sign Out",
    href: "/sign-out",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function GenLayOut() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-700/60 transition-opacity duration-250 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>

              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    src={BankDashLogo}
                    alt="Bank-dash logo"
                    // className="h-8 w-auto"
                  />
                </div>

                <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1 relative">
                    {navigation.map((item) => (
                      <li key={item.name} className="relative">
                        <Link
                          to={item.href}
                          className={classNames(
                            location.pathname === item.href ||
                              (item.href !== "/" &&
                                location.pathname.startsWith(item.href))
                              ? "text-[#2D60FF] border-l-8 border-[#2D60FF] pl-3"
                              : "text-[#B1B1B1] hover:text-[#2D60FF] pl-3",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 transition-colors duration-300"
                          )}
                        >
                          <div className="flex gap-5 mt-2 items-center">
                            <span
                              aria-hidden="true"
                              className={classNames(
                                location.pathname === item.href ||
                                  (item.href !== "/" &&
                                    location.pathname.startsWith(item.href))
                                  ? "text-[#2D60FF]"
                                  : "text-[#B1B1B1] hover:text-[#2D60FF]",
                                "h-5 w-5 shrink-0 transition-colors duration-300 "
                              )}
                            >
                              {React.cloneElement(item.src, {
                                className: "w-6 h-6 ",
                              })}
                            </span>
                            {item.name}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar */}

        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[14.5625rem] lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                src={BankDashLogo}
                alt="Bank-dash Logo"
                className="h-8 w-auto"
              />
            </div>

            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1 relative">
                    {navigation.map((item) => (
                      <li key={item.name} className="relative">
                        <Link
                          to={item.href}
                          className={classNames(
                            location.pathname === item.href ||
                              (item.href !== "/" &&
                                location.pathname.startsWith(item.href))
                              ? "text-[#2D60FF] border-l-8 border-[#2D60FF] pl-3"
                              : "text-[#B1B1B1] hover:text-[#2D60FF] pl-3",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 transition-colors duration-300"
                          )}
                        >
                          <div className="flex gap-5 mt-2 items-center">
                            <span
                              aria-hidden="true"
                              className={classNames(
                                location.pathname === item.href ||
                                  (item.href !== "/" &&
                                    location.pathname.startsWith(item.href))
                                  ? "text-[#2D60FF]"
                                  : "text-[#B1B1B1] hover:text-[#2D60FF]",
                                "h-5 w-5 shrink-0 transition-colors duration-300 "
                              )}
                            >
                              {React.cloneElement(item.src, {
                                className: "w-6 h-6 ",
                              })}
                            </span>
                            {item.name}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Top Nav  */}

        <div className="lg:pl-[230px]">
          <div className="sticky  top-0 z-40 flex h-[4.6875rem] shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Separator */}
            <div
              aria-hidden="true"
              className="h-6 w-px bg-gray-200 lg:hidden"
            />

            <div className="flex flex-1 items-center justify-between  lg:gap-x-6">
              <div>
                <PagesTitle />
              </div>

              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <form
                  action="#"
                  method="GET"
                  className="relative hidden md:flex px-3 p-2 ring-1 ring-gray-50 bg-[#F5F7FA] rounded-2xl  "
                >
                  <div className="flex   ">
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0  h-full w-5  text-gray-400"
                    />
                    <input
                      id="search-field"
                      name="search"
                      type="search"
                      placeholder="Search for something"
                      className="block bg-transparent border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 outline-none sm:text-sm"
                    />
                  </div>
                </form>

                <Link to={"/settings"}>
                  <span className="p-2 rounded-full hidden md:flex text-[30px] bg-[#F5F7FA] text-[#718EBF]">
                    <IoSettingsOutline />
                  </span>
                </Link>

                <Link to={"/notifications"}>
                  <span className="p-2 rounded-full hidden md:flex text-[30px] text-[#FE5C73] bg-[#F5F7FA]">
                    <VscBellDot />
                  </span>
                </Link>

                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 p-1.5 w-14">
                    <span className="sr-only">Open user menu</span>

                    <img src={NavUserIcon} alt="user image" />
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <Link
                          to={item.href}
                          className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <main className=" bg-gray-100 min-h-screen py-5">
            <div className=" px-4 sm:px-6 lg:px-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
