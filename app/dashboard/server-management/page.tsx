"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import DashboardLayout from "../DashboadLayout";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import CreateServerForm from "@/app/Components/server-management/create-server-form";
import { servers_data } from "@/data/server-data";
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";

const Dashboard = () => {
  const { toast } = useToast();
  const [groups, setGroups] = useState<number>(1);

  const increaseGroup = () => {
    setGroups((prev) => prev + 1);
  };

  const decreaseGroup = () => {
    setGroups((prev) => prev - 1);
  };

  //temp
  const [tableData, setTableData] = useState([
    {
      name: "----",
      status: "----",
      type: "----",
      interfaces: "----",
      ram: "----",
      pt: "----",
      cores: "----",
    },
  ]);

  useEffect(() => {
    const stringData = localStorage.getItem("server-table-data");
    if (stringData !== null) {
      const storedArray = JSON.parse(stringData);
      setTableData(storedArray);
    } else {
      console.log("server table data is not in localStorage");
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      name: e.target.server_name.value,
      type: e.target.os.value,
      status: "active",
      interfaces: e.target.no_of_interfaces.value,
      ram: e.target.ram.value,
      pt: e.target.pt.value,
      cores: e.target.cores.value,
    };

    setTimeout(() => {
      console.log(tableData);
      setTableData((prev) => {
        localStorage.setItem(
          "server-table-data",
          JSON.stringify([...prev, data])
        );

        return [...prev, data];
      });

      toast({
        title: "Server created successfully!",
      });
    }, 5000);
  };

  return (
    <DashboardLayout>
      <section className="title-section">
        <div className="title-section-name">Create server</div>
        <CreateServerForm />
      </section>
      {/* remove this 👇🏼 */}
      <div className="text-center">
        use <b>{"<Dashboardlayout>"}</b> to create multiple sections
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
