import { fetcher } from "~/utils/helpers/fetch";
import { CommitsApiResponse } from "~/lib/interfaces/types";


export const getCommitsApi  = async (page: number, page_size: number) => {
  return fetcher<CommitsApiResponse>(`/commits?page=${page}&page_size=${page_size}`);
};



