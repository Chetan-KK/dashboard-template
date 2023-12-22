"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { useToggleSidebar, useToggleSidebarOption } from "@/utils/states";

type props = {
  id: number;
  link?: string;
  name: string;
  icon: any;
  options?: { name: string; link: string; icon: any }[];
};

const SidebarOption = (props: props) => {
  const pathname = usePathname();

  const sidebarState = useToggleSidebar((state) => state.isOpen);

  const sidebarOptionsState = useToggleSidebarOption(
    (state: any) => state.optionState
  );
  const sidebarOptionsStateToggle = useToggleSidebarOption(
    (state: any) => state.toggleOptionState
  );

  const toggleOption = () => {
    sidebarOptionsStateToggle(props.id);
  };

  return (
    <li>
      {props.link ? (
        <Link href={props.link}>
          <Button
            className="w-full"
            variant={`${pathname == props.link ? "default" : "ghost"}`}
          >
            <div className="w-full text-left flex items-center justify-between">
              <div className="flex items-center gap-2">
                <props.icon className="h-4 w-4" />
                {!sidebarState && props.name}
              </div>
              {!sidebarState && props.options && (
                <Icons.downArrow className="h-3 w-3" />
              )}
            </div>
          </Button>
        </Link>
      ) : (
        <Button
          onClick={toggleOption}
          className={
            sidebarOptionsState[props.id]
              ? "w-full border border-primary"
              : "w-full"
          }
          variant={`${pathname == props.link ? "default" : "ghost"}`}
        >
          <div className="w-full text-left flex items-center justify-between">
            <div className="flex items-center gap-2">
              <props.icon className="h-4 w-4" />
              {!sidebarState && props.name}
            </div>
            {!sidebarState &&
              props.options &&
              (sidebarOptionsState[props.id] ? (
                <Icons.downArrow className="rotate-180 h-3 w-3" />
              ) : (
                <Icons.downArrow className="h-3 w-3" />
              ))}
          </div>
        </Button>
      )}
      {!sidebarState && props.options ? (
        <ul
          className={`${
            sidebarOptionsState[props.id]
              ? "h-full py-2"
              : "h-0 py-0 overflow-hidden"
          } space-y-2`}
        >
          {props.options.map((option, _) => (
            <li key={_}>
              <Link href={option.link}>
                <Button
                  className="w-full"
                  variant={`${pathname == option.link ? "default" : "ghost"}`}
                >
                  <div className="w-full pl-5 text-left flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <option.icon className="h-4 w-4" />
                      {option.name}
                    </div>
                  </div>
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      ) : undefined}
    </li>
  );
};

export default SidebarOption;
