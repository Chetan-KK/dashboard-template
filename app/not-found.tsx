import { Button } from "@/components/ui/button";
import Link from "next/link";
import DashboardLayout from "./dashboard/DashboadLayout";

export default function NotFound() {
  return (
    <DashboardLayout>
      <div className="flex mt-60 gap-3 flex-col justify-center items-center">
        <h2>404 - page not found</h2>
        {/* <Button variant={"outline"}>
          <Link href={"/"}>go home</Link>
        </Button> */}
      </div>
    </DashboardLayout>
  );
}
