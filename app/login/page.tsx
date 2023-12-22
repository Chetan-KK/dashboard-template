"use client";

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
import Header from "../Components/Header";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
export default function Login() {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      e.target.email.value === "admin@gmail.com" &&
      e.target.password.value === "admin@123"
    ) {
      router.push(`/dashboard`);
    }
  };

  return (
    <>
      <Header loggedIn={false} />
      <div className="w-80 sm:w-96 m-auto sm:pt-14 pt-4">
        <Card className="bg-background">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Login to Dashboard</CardTitle>
            <CardDescription>
              Enter your email and password below to login
            </CardDescription>
          </CardHeader>
          <form action="" onSubmit={handleSubmit}>
            <CardContent className="grid gap-4">
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
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  required
                />
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
              <Button className="w-full mt-2" type="submit">
                Login to your account
              </Button>
            </CardContent>
          </form>
          <CardFooter>
            <p className="px-8 text-center text-sm text-muted-foreground">
              Don't have an account yet?{" "}
              <Link
                href="/signup"
                className="underline underline-offset-4 hover:text-primary"
              >
                Sign-up
              </Link>
              .
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
