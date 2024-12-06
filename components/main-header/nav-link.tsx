"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./nav-link.module.css";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function navLink({ href, children }: NavLinkProps) {
  const path = usePathname();
  return (
    <>
      <Link
        href={href}
        className={
          path.startsWith(href)
            ? `${classes.link} ${classes.active}`
            : classes.link
        }
      >
        {children}
      </Link>
    </>
  );
}

export default navLink;
