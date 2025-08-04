"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">All courses</HoveredLink>
              <HoveredLink href="/courses">
                Basic music theory
              </HoveredLink>
              <HoveredLink href="/courses">Advanced Composition</HoveredLink>
              <HoveredLink href="/courses">Songwriting</HoveredLink>
              <HoveredLink href="/courses">Music Production</HoveredLink>
            </div>
        </MenuItem>
        <Link href={"/conactUs"}>
            <MenuItem setActive={setActive} active={active} item="Contact us"></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
