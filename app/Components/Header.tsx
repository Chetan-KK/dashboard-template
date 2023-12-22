import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";

type props = {
  loggedIn: boolean;
};

const Header = (props: props) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <Link href={"/"} className="flex items-center gap-2">
              <Image priority className="h-10 w-auto" src={logo} alt="logo" />
              <div className="hidden sm:block">
                <p className="whitespace-nowrap">NextJS Dashboard layout</p>
                <p className="text-xs whitespace-nowrap">
                  Next js dashboard layout with shadcn ui
                </p>
              </div>
            </Link>
          </div>
          <div className="flex gap-3 items-center">
            {props.loggedIn ? (
              <>
                <Link href={"/"}>
                  <Button>Logout</Button>
                </Link>
                <ModeToggle />
              </>
            ) : (
              <>
                <Link href={"/login"}>
                  <Button>Login</Button>
                </Link>
                <Link href={"/signup"}>
                  <Button>Sign up</Button>
                </Link>
                <ModeToggle />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
