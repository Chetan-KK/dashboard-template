"use client";

import dynamic from "next/dynamic";

const SunIcon = dynamic(
  () => import("@radix-ui/react-icons").then((module) => module.SunIcon),
  { ssr: false }
);
const MoonIcon = dynamic(
  () => import("@radix-ui/react-icons").then((module) => module.MoonIcon),
  { ssr: false }
);

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  colorThemes,
  getResolvedColorTheme,
  getResolvedMode,
  themeModes,
} from "@/utils/themeConfig";
import { ChevronDown, Paintbrush } from "lucide-react";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  function changeHandle(theme: string) {
    setTheme(getResolvedMode(resolvedTheme, theme));
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon
            className={`h-[1.2rem] w-[1.2rem] ${
              resolvedTheme?.split("-")[0] === "dark"
                ? "scale-0 -rotate-90"
                : "rotate-0 scale-100"
            } transition-all`}
          />
          <MoonIcon
            className={`absolute h-[1.2rem] w-[1.2rem] ${
              resolvedTheme?.split("-")[0] === "dark"
                ? "rotate-0 scale-100"
                : "rotate-90 scale-0"
            }  transition-all`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeModes.map((theme, _) => (
          <DropdownMenuItem
            key={_}
            onClick={() => {
              changeHandle(theme.css_var);
            }}
          >
            {theme.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ColorThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  function changeHandle(theme: string) {
    setTheme(getResolvedColorTheme(resolvedTheme, theme));
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2"
          >
            <Paintbrush className="h-4 w-4" /> Theme
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {colorThemes.map((theme, _) => (
            <DropdownMenuItem
              key={_}
              onClick={() => {
                changeHandle(theme.css_var);
              }}
              asChild
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 bg-${theme.css_var} rounded-full border-border border`}
                ></div>
                {theme.name}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
