import { useQuery } from "@tanstack/react-query";
import { UserData } from "~/lib/interfaces/types";
export function useUserQuery(id: string | undefined) {
  return useQuery<UserData>({
    queryKey: ["user", id],
    queryFn: async () => {
      if (!id) throw new Error("User ID is required");

      const res = await fetch(`http://192.168.1.37:3000/v1.0/user/${id}`);
      if (!res.ok) throw new Error("Failed to fetch user");

      const json = await res.json();

     
      return json.data;
    },
    enabled: !!id,
  });
}
