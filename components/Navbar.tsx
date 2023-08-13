import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constant";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {};

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flex-start gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="Dribblex" />
        </Link>
        <ul className="md:flex xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
