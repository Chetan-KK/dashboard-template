"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { push } = useRouter();

  useEffect(() => {
    push("/dashboard/server-management");
  }, []);
  return <p></p>;
}
