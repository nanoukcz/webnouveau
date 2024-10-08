"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}

const items = [
  { label: "aboutMe", link: "#aboutMe" },
  { label: "toolbox", link: "#toolbox" },
  { label: "cv", link: "#cv" },
  { label: "portfolio", link: "#portfolio" },
  { label: "contact", link: "#contact" },
];

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block bg-background md:hidden">
      <nav className="container mx-auto flex items-center justify-center">
        <div className="w-[400px] sm:w-[540px] text-2xl py-6 items-start text-primary glow after:content-['}']">
          <span className="text-primary text-2xl glow after:content-['{']">
            webNouveau{" "}
          </span>
          <div className="flex flex-col pl-7">
            {items.map((item) => (
              <NavbarItem
                key={item.label}
                link={item.link}
                label={item.label}
              />
            ))}
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}

function DesktopNavbar() {
  return (
    <div className="hidden bg-background md:block">
      <nav className="container items-center justify-between">
        <div className="flex h-[80px] min-h-[64px] items-center">
          <span className="text-primary text-2xl after:content-['{'] glow">
            webNouveau{" "}
          </span>
          <div className="flex h-full glow relative text-primary text-2xl items-center after:content-['}']">
            {items.map((item) => (
              <NavbarItem
                key={item.label}
                link={item.link}
                label={item.label}
              />
            ))}
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}

function NavbarItem({
  link,
  label,
  clickCallback,
}: {
  link: string;
  label: string;
  clickCallback?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-full justify-start text-base text-foreground not-glow hover:text-secondary underline underline-offset-8 after:content-[';']",
          isActive && "text-foreground",
        )}
        onClick={() => {
          if (clickCallback) clickCallback();
        }}
      >
        {label}
      </Link>
    </div>
  );
}

export default Navbar;
