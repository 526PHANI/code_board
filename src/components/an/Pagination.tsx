import { Input } from "~/components/ui/input";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as ShadCNPagination,
} from "~/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import React, { useEffect, useState } from "react";
import { useRouter } from "@tanstack/react-router";
export interface DynamicPaginationProps {
    paginationDetails: any;
    totalItems?: number;
    capturePageNum: (value: number) => void;
    captureRowPerItems: (value: number) => void;
    initialPage?: number;
    limitOptionsFromProps?: { title: string; value: number }[];
  }
export const Pagination = ({
  capturePageNum,
  captureRowPerItems,
  initialPage = 1,
  limitOptionsFromProps,
  paginationDetails,
}: DynamicPaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [pageValue, setPageValue] = useState<number>(initialPage);
  const [limitOptions, setLimitOptions] = useState<
    { title: string; value: number }[]
  >([]);
  const [pageNumFocused, setPageNumFocused] = useState(false);
  const totalPages = paginationDetails ? paginationDetails.total_pages : 1;
  const selectedValue = paginationDetails?.limit;
  useEffect(() => {
    setLimitOptions(
      limitOptionsFromProps?.length
        ? limitOptionsFromProps
        : [
            { title: "10", value: 10 },
            { title: "25", value: 25 },
            { title: "50", value: 50 },
            { title: "100", value: 100 },
            { title: "200", value: 200 },
          ]
    );
  }, [limitOptionsFromProps]);
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setPageValue(page);
      capturePageNum(page);
    }
  };
  const handleRowChange = (newLimit: string) => {
    captureRowPerItems(Number(newLimit));
  };
  const onKeyDownInPageChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const page = Math.max(1, Math.min(Number(pageValue) || 1, totalPages));
      handlePageChange(page);
    }
  };
  useEffect(() => {
    if (paginationDetails?.page) {
      setPageValue(paginationDetails.page);
      setCurrentPage(paginationDetails.page);
    }
  }, [paginationDetails]);
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push(null);
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push(null);
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push(null);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push(null);
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };
  return (
    <ShadCNPagination className="flex justify-between px-2 py-1 items-center">
      <div className="flex justify-between items-center">
      <PaginationContent
        className="px-1 py-0 flex gap-2"
        key={"pagination-1" + `-${new Date().getTime()}`}
      >
        <p className="font-normal text-(length:--an-table-text-size) font-[inter]">
          Result per page
        </p>
        <Select
          defaultValue={selectedValue ? selectedValue.toString() : "10"}
          onValueChange={handleRowChange}
        >
          <SelectTrigger className="w-15 py-0 text-zinc-800 border border-zinc-800 px-1 max-h-7">
            <SelectValue
              placeholder={`Items per page`}
              className="font-normal text-sm"
            />
          </SelectTrigger>
          <SelectContent className="bg-white pointer">
            {limitOptions.map((item, index) => (
              <SelectItem
                value={item.value?.toString()}
                key={index + `-${new Date().getTime()}`}
                className="cursor-pointer font-normal text-sm"
              >
                {item.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </PaginationContent>
      <PaginationContent
          className="px-2 py-0"
          key={"pagination-2" + `-${new Date().getTime()}`}
        >
          <div className="flex items-center font-normal text-(length:--an-table-text-size)">
            Go to
            <Input
              type="number"
              value={pageValue}
              autoFocus={pageNumFocused}
              onFocus={() => setPageNumFocused(true)}
              onBlur={() => setPageNumFocused(false)}
              onChange={(e) => setPageValue(Number(e.target.value))}
              onKeyDown={onKeyDownInPageChange}
              className="h-[30px] w-[40px] m-auto font-[inter] flex items-center text-center py-0 ml-2 text-sm pl-1 pr-0 font-normal bg-white border-none"
              placeholder="Page"
            />
          </div>
      </PaginationContent>
      </div>
      <div className="flex">
      <PaginationContent
          className="px-2 py-0"
        >
          <div className="flex items-center font-normal text-(length:--an-table-text-size)">
          {(paginationDetails?.page == 1
              ? 1
              : (paginationDetails?.page - 1) * selectedValue + 1) +
              " - " +
              (paginationDetails?.page == totalPages
                ? paginationDetails?.total
                : paginationDetails?.total < selectedValue
                  ? paginationDetails?.total
                  : paginationDetails?.page * selectedValue)}{" "}
            of {paginationDetails?.total}
          </div>
      </PaginationContent>
      </div>
      <PaginationContent
        className="px-1 py-0 font-normal gap-2"
        key={3 + `-${new Date().getTime()}`}
      >
        <PaginationItem className="font-normal">
          <PaginationPrevious
            href={currentPage === 1 ? undefined : "#"}
            onClick={(e) => {
              if (currentPage === 1) {
                e.preventDefault();
                return;
              }
              e.preventDefault();
              handlePageChange(currentPage - 1);
            }}
            aria-disabled={currentPage === 1}
            className={`max-h-8 ${
              currentPage === 1
                ? "pointer-events-none cursor-not-allowed opacity-20"
                : "cursor-pointer bg-white text-black text-(length:--an-table-text-size) font-normal border-none"
            }`}
          />
        </PaginationItem>
        {getPageNumbers().map((pageNumber, index) =>
          pageNumber === null ? (
            <PaginationItem key={`ellipsis-${index}-${new Date().getTime()}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={pageNumber + `-${new Date().getTime()}`}>
              <PaginationLink
                href="#"
                isActive={pageNumber === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(pageNumber);
                }}
                className={`w-[25px] h-[30px] font-normal hover:no-underline ${
                  pageNumber === currentPage
                    ? "bg-black text-white border-none hover:bg-black hover:text-white"
                    : "bg-white text-black border-none text-(length:--an-table-text-size)"
                }`}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem>
          <PaginationNext
            href={currentPage === totalPages ? undefined : "#"}
            onClick={(e) => {
              if (currentPage === totalPages) {
                e.preventDefault();
                return;
              }
              e.preventDefault();
              handlePageChange(currentPage + 1);
            }}
            aria-disabled={currentPage === totalPages}
            className={` max-h-8 ${
              currentPage === totalPages
                ? "pointer-events-none cursor-not-allowed opacity-20"
                : "cursor-pointer bg-white text-black text-(length:--an-table-text-size) font-normal border-none font-[inter]"
            }`}
          />
        </PaginationItem>
      </PaginationContent>
      </ShadCNPagination>
  );
};
export default Pagination;