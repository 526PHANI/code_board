

export type UserProfile = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: string;
  dob: string;
  doj: string;
  designation: string;
  created_at: string;
  updated_at: string;
};



export interface Commit {
  id: number;
  project: string;
  linesOfCode: number;
  commitName: string;
  date: string;
  commitLinks: string;
  name: string;
}



export type CommitFormData = {
  project: string;
  date: Date | undefined;
  lines: string;
  commit: string;
  commitname: string;
  name: string;
};


export interface UsersApiResponse {
  data: {
    total_records: number;
    curent_page: number;
    page_size: number;
    totalPages: number;
    next_page: number;
    prev_page: number;
    data: UserProfile[];
  };
}


export type FullProfile = Omit<UserProfile, 'created_at' | 'updated_at'>;
