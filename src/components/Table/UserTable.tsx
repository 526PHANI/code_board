import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useState } from "react";
import { cn } from "~/lib/utils";

const data: Project[] = [
  {
    imgUrl: "/public/nyaya-tech.png",
    project_name: "NYAYA TECH",
    month: "12/05/2023",
    date: "12-May-2023",
    time: "12:06:00",
    lines_of_code: 200,
    project_link: "admin.nyayatech.com",
    commit_name: "Update position of view profile screen",
  },
  {
    imgUrl: "/public/esigns.png",
    project_name: "eSigns",
    month: "12/05/2023",
    date: "12-May-2023",
    time: "12:06:00",
    lines_of_code: 200,
    project_link: "admin.esigns.com",
    commit_name: "Update position of view profile screen",
  },
  {
    imgUrl: "/public/lab-squire.png",
    project_name: "Lab Squire",
    month: "12/05/2023",
    date: "12-May-2023",
    time: "12:06:00",
    lines_of_code: 200,
    project_link: "admin.labsquire.com",
    commit_name: "Update position of view profile screen",
  },
  {
    imgUrl: "/public/peepul-agri.png",
    project_name: "Peepul Agri",
    month: "12/05/2023",
    date: "12-May-2023",
    time: "12:06:00",
    lines_of_code: 200,
    project_link: "admin.peepulagri.com",
    commit_name: "Update position of view profile screen",
  },
  {
    imgUrl: "/public/nyaya-tech.png",
    project_name: "NYAYA TECH",
    month: "12/05/2023",
    date: "12-May-2023",
    time: "12:06:00",
    lines_of_code: 200,
    project_link: "admin.nyayatech.com",
    commit_name: "Update position of view profile screen",
  },
];

export type Project = {
  imgUrl: string;
  project_name: string;
  month: string;
  date: string;
  time: string;
  lines_of_code: number;
  project_link: string;
  commit_name: string;
};

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "project_name",
    header: () => <div>Project Name</div>,
    cell: ({ row }) => (
      <div className="flex gap-2 items-center w-40">
        <img
          src={row.original.imgUrl}
          className="w-8 h-8 rounded-2xl object-cover border"
        />
        <div className="text-(--an-table-body-text-color)">
          {row.getValue("project_name")}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "month",
    header: () => <div>Month</div>,
    cell: ({ row }) => {
      return (
        <div className="text-(--an-table-body-number-color)">
          {row.getValue("month")}
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: () => <div>Date</div>,
    cell: ({ row }) => {
      return (
        <div className="text-(--an-table-body-number-color)">
          {row.getValue("date")}
        </div>
      );
    },
  },
  {
    accessorKey: "time",
    header: () => <div>Time</div>,
    cell: ({ row }) => {
      return (
        <div className="text-(--an-table-body-number-color)">
          {row.getValue("time")}
        </div>
      );
    },
  },
  {
    accessorKey: "lines_of_code",
    header: () => <div>Lines of Codes</div>,
    cell: ({ row }) => {
      return (
        <div className="text-(--an-table-body-number-color)">
          {row.getValue("lines_of_code")}
        </div>
      );
    },
  },
  {
    accessorKey: "project_link",
    header: () => <div>Project Link</div>,
    cell: ({ row }) => {
      return (
        <div className="text-(--an-table-body-text-color)">
          {row.getValue("project_link")}
        </div>
      );
    },
  },
  {
    id: "commit_link",
    header: () => <div>Commit Links</div>,
    cell: () => (
      <Button className="bg-(--an-table-header-background) rounded-lg text-(--an-table-body-text-color) text-sm hover:bg-blue-400 hover:text-white h-7 font-normal">
        Open Link
      </Button>
    ),
  },
  {
    accessorKey: "commit_name",
    header: () => <div>Commit Name</div>,
    cell: ({ row }) => {
      return (
        <div className="text-(--an-table-body-text-color)">
          {row.getValue("commit_name")}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div>Actions</div>,
    cell: () => (
      <div className="w-30 text-(--an-table-body-text-color)">Actions</div>
    ),
  },
];

export function UserTable() {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full bg-blue-50 p-5">
      <Table className="border-separate border-spacing-y-1.5">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="text-(--an-table-header-text-color) font-[inter] text-(length:--an-table-text-size) font-medium last:pt-2 last:pb-2  last:pr-2 first:pt-2 first:pb-2 first:pl-2 bg-(--an-table-background) p-0 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg"
                >
                  <span  className="p-1 w-full block bg-(--an-table-header-background) rounded">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </span>
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="bg-white hover:bg-white">
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="text-(length:--an-table-text-size) font-[inter] font-normal px-2 py-1 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
