"use client";

import DashboardSidebar from "../Components/DashboardSidebar";
import { Suspense } from "react";
import Loading from "../loading";
import { useToggleSidebar } from "@/utils/states";

const DashboardLayout = ({ children }: any) => {
  const sidebarState = useToggleSidebar((state) => state.isOpen);

  return (
    <>
      <DashboardSidebar />

      <div
        className={`sm:p-4 pt-4 ${
          sidebarState ? "ml-[80px]" : "ml-[330px]"
        } min-w-[250px] h-screen overflow-hidden overflow-y-scroll`}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </>
  );
};

export default DashboardLayout;
