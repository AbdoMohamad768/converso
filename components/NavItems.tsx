"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

function NavItems() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          // className={pathname === item.href ? "text-cta-gold font-medium" : ""}
          className={cn(pathname === item.href && "text-primary font-bold")}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavItems;
