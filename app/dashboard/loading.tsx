import { Loader2 } from "lucide-react";
import DashboardLayout from "./DashboadLayout";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <DashboardLayout>
      <section className="title-section">
        <div className="space-y-2">
          <Skeleton className="h-6 w-[250px]" />
          <Skeleton className="h-6 w-[200px]" />
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Loading;
