import { useQuery } from "@tanstack/react-query";
import React from "react";
import dayjs from "dayjs";
import { ColumnDef } from "@tanstack/react-table";

import { ProfileTable } from "../an/ProfileTable";
import { useNavigate, useSearch } from '@tanstack/react-router';
import { Commit , CommitsApiResponse, SearchParams} from "~/lib/interfaces/types";
import { getCommitsApi } from "~/http/services/commits";
import { Route } from '~/routes/commit/get-commit';


export const columns: ColumnDef<Commit>[] = [
  {
    accessorKey: "project_name",
    header: () => <div>Project Name</div>,
    cell: ({ row }) => <div>{row.getValue("project_name")}</div>,
  },
    {
    accessorKey: "user_first_name",
    header: () => <div>Developer Name</div>,
    cell: ({ row }) => <div>{row.getValue("user_first_name")}</div>,
  },
  {
    accessorKey: "created_at",
    header: () => <div>Date</div>,
    cell: ({ row }) => (
      <div>{dayjs(row.getValue("created_at")).format("DD-MMM-YYYY")}</div>
    ),
  },
  {
    accessorKey: "created_at_time",
    header: () => <div>Time</div>,
    cell: ({ row }) => (
      <div>{dayjs(row.getValue("created_at")).format("HH:mm")}</div>
    ),
  },
  {
    accessorKey: "line_of_codes",
    header: () => <div>Lines of Code</div>,
    cell: ({ row }) => <div>{row.getValue("line_of_codes")}</div>,
  },
  {
    accessorKey: "commit_link",
    header: () => <div>Link</div>,
    cell: ({ row }) => {
      const link = row.getValue("commit_link");
      try {
        new URL(link as string);
        return (
          <a
            href={link as string}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Commit
          </a>
        );
      } catch {
        return <div>{typeof link === "string" && link.trim() !== "" ? link : "N/A"}</div>;
      }
    },
  },
  {
    accessorKey: "commit_message",
    header: () => <div>Commit Message</div>,
    cell: ({ row }) => (
      <div className="max-w-xs truncate">
        {row.getValue("commit_message")}
      </div>
    ),
  },
  {
    accessorKey: "action",
    header: () => <div>Action</div>,
    cell: () => (
      <div className="text-blue-500 cursor-pointer">Action</div>
    ),
  },
];




function CommitsList() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const initialPage = 1;
  const initialpage_size = 10;

const currentPage = Number(search.page_no) || initialPage;
const currentPageSize = Number(search.page_size) || initialpage_size;


  React.useEffect(() => {
    if (search.page_no !== currentPage || search.page_size !== currentPageSize) {
    }
  }, [search.page_no, search.page_size, navigate, currentPage, currentPageSize]);



const { data,isLoading, isError } = useQuery<CommitsApiResponse>({
  queryKey: ['commits', currentPage, currentPageSize],
  queryFn: () => getCommitsApi(currentPage, currentPageSize),
  enabled: search.page_no != null && search.page_size != null,
});



console.log("API Response:", data);

if(isLoading) return <p>loading.. </p>

if (isError || !data?.data?.data || !Array.isArray(data.data.data)) {
  return <div>Error fetching commits or no data available.</div>;
}



const commits = data.data.data.map(commit => ({
  
  ...commit,
  

}));

const paginationDetails = {
  page: data.data.page,
  total_pages: data.data.totalPages,
  total: Number(data.data.total_records),
  page_size: data.data.page_size,
};

  return (
    <ProfileTable
      data={commits}
      columns={columns}
      paginationDetails={paginationDetails}
  getData={(params: { page?: number; page_size?: number }) => {
        navigate({
          search: (prevSearch:any) => {
            return {
              ...prevSearch,
              page_no: params.page !== undefined ? params.page : prevSearch.page_no,
              page_size: params.page_size !== undefined ? params.page_size : prevSearch.page_size,
            };
          },
        });
      }}
    />
  );
}

export default CommitsList;




