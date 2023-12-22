import React from "react";
import DashboardLayout from "../DashboadLayout";
import { ColorThemeToggle, ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <DashboardLayout>
      <section className="title-section space-y-2">
        <div className="title-section-name">Personalize dashboard</div>
        <div className="float-right option flex items-center gap-2">
          <Link href={"/"}>
            <Button variant={"destructive"}>Logout</Button>
          </Link>
        </div>
        <div className="option flex items-center gap-2">
          Select mode:
          <ModeToggle />
        </div>
        <div className="option flex items-center gap-2">
          Select color theme:
          <ColorThemeToggle />
        </div>
      </section>
    </DashboardLayout>
  );
};

export default page;
