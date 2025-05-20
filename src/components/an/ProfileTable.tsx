import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Pagination from "./Pagination";

interface ProfileTableProps<TData> {
  data: TData[];
  columns: any;
  getData: (params: { page?: number; page_size?: number }) => void;
  paginationDetails: {
    page: number;
    total_pages: number;
    total: number;
    page_size: number;
  };
}

export function ProfileTable<TData>({
  data,
  columns,
  getData,
  paginationDetails,
}: ProfileTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const handlePageChange = (page: number) => {
    getData({
      page: page,
      page_size: paginationDetails.page_size,
    });
  };

  const handlePageSizeChange = (page_size: number) => {
    getData({ page: 1, page_size });
  };

  return (
    <div className="w-full bg-blue-50 p-5">
      <Table className="border-separate border-spacing-y-1.5">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="text-(--an-table-header-text-color) font-[inter] text-(length:--an-table-text-size) font-medium last:pt-2 last:pb-2 last:pr-2 first:pt-2 first:pb-2 first:pl-2 bg-(--an-table-background) p-0 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg"
                >
                  <span className="p-2 w-full block bg-(--an-table-header-background) rounded">
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
                    className="text-(length:--an-table-text-size) font-[inter] font-normal px-2 py-2 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg"
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
      <div className="bg-transparent mt-3">
        <Pagination
          paginationDetails={{
            ...paginationDetails,
            limit: paginationDetails.page_size,
          }}
          capturePageNum={handlePageChange}
          captureRowPerItems={handlePageSizeChange}
        />
      </div>
    </div>
  );
}



