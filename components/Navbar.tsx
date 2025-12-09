"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  // SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";

function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="log" width={46} height={46} />
        </div>
      </Link>

      <div className="flex items-center gap-8">
        <NavItems />

        <SignedOut>
          <div className="flex items-center gap-3">
            <SignInButton>
              <button className="btn-signin">Sign In</button>
            </SignInButton>
            {/* <SignUpButton /> */}
          </div>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

export default Navbar;
