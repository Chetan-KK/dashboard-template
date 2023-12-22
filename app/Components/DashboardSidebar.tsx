import logo from "@/public/logo.png";
import React from "react";
import SidebarOption from "./SidebarOption";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Settings,
  Server,
  LandPlot,
  ShieldCheck,
  HardDriveDownload,
  Copyright,
  FolderOpen,
  BarChart3,
  LockKeyhole,
  PanelLeftClose,
  PanelLeftOpen,
  Airplay,
} from "lucide-react";
import UserDropDown from "./UserDropDown";
import { useToggleSidebar } from "@/utils/states";

const DashboardSidebar = () => {
  const pathname = usePathname();

  const sidebarState = useToggleSidebar((state) => state.isOpen);
  const sidebarToggle = useToggleSidebar((state) => state.toggleSidebar);

  const sidebarLinks = [
    {
      link: "/dashboard/server-management",
      name: "Server management",
      icon: Server,
    },
    {
      name: "Firewall and network device",
      icon: ShieldCheck,
      options: [
        {
          name: "Devices",
          link: "/dashboard/firewall-and-network-device/devices",
          icon: Airplay,
        },
        {
          name: "Vlan",
          link: "/dashboard/firewall-and-network-device/vlan",
          icon: ShieldCheck,
        },
        {
          name: "Dhcp",
          link: "/dashboard/firewall-and-network-device/dhcp",
          icon: ShieldCheck,
        },
        {
          name: "Dns proxy",
          link: "/dashboard/firewall-and-network-device/dns-proxy",
          icon: ShieldCheck,
        },
        {
          name: "Virtual wires",
          link: "/dashboard/firewall-and-network-device/virtual-wires",
          icon: ShieldCheck,
        },
        {
          name: "Interface Mgmt",
          link: "/dashboard/firewall-and-network-device/interface-mgmt",
          icon: LandPlot,
        },
        {
          name: "Virtual routers",
          link: "/dashboard/firewall-and-network-device/virtual-routers",
          icon: ShieldCheck,
        },
        {
          name: "Ipsec tunnels",
          link: "/dashboard/firewall-and-network-device/tpsec-tunnels",
          icon: ShieldCheck,
        },
        {
          name: "Gre tunnels",
          link: "/dashboard/firewall-and-network-device/gre-tunnels",
          icon: ShieldCheck,
        },
      ],
    },
    {
      link: "/dashboard/Load-balance",
      name: "Load balance",
      icon: HardDriveDownload,
    },
    {
      link: "/dashboard/software-license-management",
      name: "Software license management",
      icon: Copyright,
    },
    {
      link: "/dashboard/hardware-inventory-and-asset-tracking",
      name: "Hardware Inventory and asset tracking",
      icon: FolderOpen,
    },
    {
      link: "/dashboard/reporting-and-analytics",
      name: "Reporting and analytics",
      icon: BarChart3,
    },
    {
      link: "/dashboard/security-and-compliance",
      name: "security and compliance",
      icon: LockKeyhole,
    },
  ];

  return (
    <div
      id="logo-sidebar"
      className="absolute top-0 left-0 z-40 w-auto h-screen transition-transform border-r border-border translate-x-0 bg-background"
    >
      <div className="h-full flex flex-col justify-between pr-2 pl-3.5 py-4  overflow-y-scroll bg-background">
        <div>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-border">
            {!sidebarState && (
              <div className="flex items-center gap-2">
                <Image priority className="h-8 w-auto" src={logo} alt="logo" />
                <div className="block">
                  <p className="whitespace-nowrap text-xs">Dashboard</p>
                  <p className="text-muted-foreground text-xs whitespace-nowrap  overflow-hidden">
                    {pathname.split("/")[pathname.split("/").length - 1]}
                  </p>
                </div>
              </div>
            )}
            <div
              className={`gap-2 flex items-center ${sidebarState && "mx-auto"}`}
            >
              {!sidebarState && <UserDropDown />}
              {sidebarState ? (
                <Button
                  variant={"ghost"}
                  onClick={sidebarToggle}
                  className="p-2"
                >
                  <PanelLeftOpen className="w-5 h-5" />
                </Button>
              ) : (
                <Button
                  variant={"ghost"}
                  onClick={sidebarToggle}
                  className="p-2"
                >
                  <PanelLeftClose className="w-5 h-5" />
                </Button>
              )}
            </div>
          </div>
          <ul className="space-y-2 font-medium">
            {sidebarLinks.map((link, _) => (
              <SidebarOption
                key={_}
                id={_}
                link={link.link}
                name={link.name}
                options={link.options}
                icon={link.icon}
              />
            ))}
          </ul>
        </div>
        <div className="border-t border-border pt-2 space-y-2">
          <Link href={"/dashboard/settings"}>
            <Button
              className="w-full"
              variant={pathname === "/dashboard/settings" ? "default" : "ghost"}
            >
              <div className="w-full text-left flex items-center justify-start gap-2">
                <Settings className="h-4 w-4" />
                {!sidebarState && "Settings"}
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
