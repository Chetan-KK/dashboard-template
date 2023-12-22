"use client";

import Link from "next/link";
import Header from "../Components/Header";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Signup = () => {
  const handleSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <Header loggedIn={false} />
      <div className="w-80 sm:w-96 m-auto sm:pt-14 pt-4">
        <Card className="bg-background">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Create account</CardTitle>
            <CardDescription>
              Enter your details below to create new account
            </CardDescription>
          </CardHeader>
          <form action="" onSubmit={handleSubmit}>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-6">
                <Button variant="outline" type="button">
                  <Icons.google className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" type="button">
                  <Icons.gitHub className="mr-2 h-4 w-4" />
                  Github
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="fname">First name</Label>
                <Input
                  type="fname"
                  name="fname"
                  id="fname"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lname">Last name</Label>
                <Input
                  type="lname"
                  name="lname"
                  id="lname"
                  placeholder="Enter your last name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email ID"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phoneNo">Phone Number</Label>
                <Input
                  type="number"
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Create new Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  required
                  aria-autocomplete="list"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password_confirm">Confirm password</Label>
                <Input
                  type="password"
                  name="password_confirm"
                  id="password_confirm"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <Button className="w-full mt-2" type="submit">
                Create account
              </Button>
            </CardContent>
          </form>
          <CardFooter>
            <p className="px-8 text-center text-sm text-muted-foreground">
              Already have an account yet?{" "}
              <Link
                href="/login"
                className="underline underline-offset-4 hover:text-primary"
              >
                Login
              </Link>
              .
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Signup;
