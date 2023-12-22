"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Ban, Check, CircleOff, MoreHorizontal, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type Server = {
  name: string;
  type: string;
  status: "not available" | "hibernate" | "offline" | "online";
  interfaces: number;
  ram: string;
  pt: string;
  cores: number;
};

export const columns: ColumnDef<Server>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px] my-2 border-border"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px] my-2 border-border"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return row.original.status === "online" ? (
        <div className="flex items-center gap-2 text-success font-semibold">
          <Check className="w-4 h-4" />
          {row.original.status}
        </div>
      ) : row.original.status === "offline" ? (
        <div className="flex items-center gap-2 text-muted-foreground font-semibold">
          <X className="w-4 h-4" />
          {row.original.status}
        </div>
      ) : row.original.status === "hibernate" ? (
        <div className="flex items-center gap-2 text-muted-foreground opacity-50 font-semibold">
          <CircleOff className="w-4 h-4" />
          {row.original.status}
        </div>
      ) : (
        <div className="flex items-center gap-2 text-destructive font-semibold">
          <Ban className="w-4 h-4" />
          {row.original.status}
        </div>
      );
    },
  },

  {
    accessorKey: "interfaces",
    header: "Interfaces",
  },

  {
    accessorKey: "ram",
    header: "RAM",
  },

  {
    accessorKey: "pt",
    header: "Processor Type",
  },

  {
    accessorKey: "cores",
    header: "Cores",
  },
];
