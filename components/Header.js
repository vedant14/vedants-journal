import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import menuData from "../data/menu.json";
import {
  Popover,
  PopoverPanel,
  PopoverButton,
  PopoverOverlay,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import { Container } from "./Container";
import avatarImage from "../public/vedant.jpg";
import { Fragment } from "react";
import { classNames } from "../utils/lib";

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-2">
        {children}
      </PopoverButton>
    </li>
  );
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </PopoverButton>
      <Transition>
        <TransitionChild
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <PopoverOverlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </TransitionChild>
        <TransitionChild
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <PopoverButton aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </PopoverButton>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                {menuData.map((item, i) => (
                  <MobileNavItem key={i} href={item.slug}>
                    {item.title}
                  </MobileNavItem>
                ))}
              </ul>
            </nav>
          </PopoverPanel>
        </TransitionChild>
      </Transition>
    </Popover>
  );
}

function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={classNames("relative block px-3 py-2 transition")}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-2 bottom-px h-0.5 bg-link" />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex text-sm text-zinc-800">
        {menuData.map((item, i) => (
          <NavItem href={item.slug} key={i}>
            {item.title}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}

function AvatarContainer({ className, ...props }) {
  return (
    <div
      className={classNames(
        className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
      )}
      {...props}
    />
  );
}

function Avatar({ large = false, className, ...props }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={classNames(className, "pointer-events-auto")}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? "8rem" : "2.25rem"}
        className={classNames(
          "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
          large ? "h-24 w-24" : "h-9 w-9"
        )}
        priority
      />
    </Link>
  );
}

export function Header() {
  return (
    <div className="mb-16">
      <header
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          height: "var(--header-height)",
          marginBottom: "var(--header-mb)",
        }}
      >
        <div
          className="top-0 z-10 pt-6"
          style={{ position: "var(--header-position)" }}
        >
          <Container>
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                <AvatarContainer>
                  <Avatar />
                </AvatarContainer>
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
            </div>
          </Container>
        </div>
      </header>
    </div>
  );
}
