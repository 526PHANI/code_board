
import { fetcher } from "~/utils/helpers/fetch";
import { UserProfile } from "~/lib/interfaces/types";

export const getProfileAPI = async (id: string) => {
 
  return fetcher<{
    status: number;
    success: boolean;
    message: string;
    data: UserProfile;
  }>(`users/${id}`);
  
};