import { fetcher } from "~/utils/helpers/fetch";
import { UsersApiResponse } from "~/lib/interfaces/types";




export const getUsersAPI = async (page: number, page_size: number) => {
  return fetcher<UsersApiResponse>(`/users?page_no=${page}&page_size=${page_size}`);
};
