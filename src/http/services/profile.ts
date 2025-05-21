import { fetcher } from "~/utils/helpers/fetch";

type UserType = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  designation: string;
  dob: string;
  doj: string;
  is_active: boolean;
};

type GetProfileApiResponse = {
  status: number;
  success: boolean;
  message: string;
  data: UserType;
};

export const getProfileAPI = async (id: string) => {
  return fetcher<GetProfileApiResponse>(`/users/${id}`);
};