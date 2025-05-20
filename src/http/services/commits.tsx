import { fetcher } from "~/utils/helpers/fetch";
import { Commit } from "~/lib/interfaces/types";


export const getCommitsApi  = async (page: number, page_size: number) => {
  return fetcher<Commit>(`/commits?page_no=${page}&page_size=${page_size}`);
};



