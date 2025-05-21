
import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../helpers/fetch';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: string;
  dob: string;
  doj: string;
  designation: string;
}

interface UsersApiResponse {
  status: number;
  success: boolean;
  message: string;
  data: {
    total_records: number;
    curent_page: number;
    page_size: number;
    totalPages: number;
    next_page: number;
    prev_page: number;
    data: User[];
  };
}

export const useUsers = (page: number) => {
  return useQuery<UsersApiResponse>({
    queryKey: ['users', page],
    queryFn: () => fetcher<UsersApiResponse>(`/users?page_no=${page}`)
  });
};
