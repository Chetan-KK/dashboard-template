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
        className={`p-4 ${
          sidebarState ? "sm:ml-[80px]" : "sm:ml-[330px]"
        } h-screen overflow-hidden overflow-y-scroll`}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </>
  );
};

export default DashboardLayout;
