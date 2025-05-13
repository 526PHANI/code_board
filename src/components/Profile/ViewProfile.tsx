import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { getProfileAPI } from "~/http/services/profile";
import dayjs from "dayjs";
import { useParams } from "@tanstack/react-router";

export function ViewProfile() {
  const { id } = useParams({ from: "/profile/$id" });

  const { isLoading, data } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getProfileAPI(id),
    enabled: !!id,
  });

  const user = data?.data;
  function capital(string: string) {
    return string.split('').map((char: string, index) =>
      index === 0 ? char.toUpperCase() : char).join('')
  }

  return (
    <Card className="w-300 h-45 p-4 items-start rounded-(--an-profile-border-radius) bg-(--an-profile-background) m-5 shadow-none border">
      <div className="flex">
        <div className="pt-2">
          <Avatar className="w-35 h-35 object-cover">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
        </div>

        <div className="flex flex-col">
          <CardHeader>
            <div className="flex gap-5 items-start">
              <CardTitle className="text-(--an-profile-text-color) font-[urbanist] text-(length:--an-profile-title-text-size) font-medium">
                {capital(user?.first_name || "")} {capital(user?.last_name || "")}
              </CardTitle>
              <div className="rounded-4xl bg-(--an-profile-active-bg) flex justify-center items-center px-4 py-1 h-6">
                <span className="text-(--an-profile-active-color) font-[urbanist] text-(length:--an-profile-active-text-size) font-medium">
                  Active
                </span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="mt-2">
            <form className="flex flex-col items-start gap-4">
              <div className="flex flex-start gap-8 self-stretch">
                <div className="flex flex-col gap-2 w-75 justify-center align-start">
                  <Label
                    htmlFor="email"
                    className="text-(--an-profile-label-color) font-[urbanist] text-(length:--an-profile-text-size) font-normal !important"
                  >
                    Email
                  </Label>
                  <p
                    id="email"
                    className="text-(--an-profile-text-color) font-[urbanist] text-(length:--an-profile-text-size) font-medium"
                  >
                    {user?.email}
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-75 justify-center align-start">
                  <Label
                    htmlFor="mobile"
                    className="text-(--an-profile-label-color) font-[urbanist] text-(length:--an-profile-text-size) font-normal !important"
                  >
                    Mobile
                  </Label>
                  <p
                    id="mobile"
                    className="text-(--an-profile-text-color) font-[urbanist] text-(length:--an-profile-text-size) font-medium"
                  >
                    {user?.phone}
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-75 justify-center align-start">
                  <Label
                    htmlFor="designation"
                    className="text-(--an-profile-label-color) font-[urbanist] text-(length:--an-profile-text-size) font-normal !important"
                  >
                    Designation
                  </Label>
                  <p
                    id="designation"
                    className="text-(--an-profile-text-color) font-[urbanist] text-(length:--an-profile-text-size) font-medium"
                  >
                    {user?.designation}
                  </p>
                </div>
              </div>
              <div className="flex flex-start gap-8 self-stretch">
                <div className="flex flex-col gap-2 w-75 justify-center align-start">
                  <Label
                    htmlFor="birth"
                    className="text-(--an-profile-label-color) font-[urbanist] text-(length:--an-profile-text-size) font-normal !important"
                  >
                    Date Of Birth
                  </Label>
                  <p
                    id="email"
                    className="text-(--an-profile-text-color) font-[urbanist] text-(length:--an-profile-text-size) font-medium"
                  >
                    {dayjs(user?.dob).format("DD MMM YYYY")}
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-75 justify-center align-start">
                  <Label
                    htmlFor="joining"
                    className="text-(--an-profile-label-color) font-[urbanist] text-(length:--an-profile-text-size) font-normal !important"
                  >
                    Date Of Joining
                  </Label>
                  <p
                    id="mobile"
                    className="text-(--an-profile-text-color) font-[urbanist] text-(length:--an-profile-text-size) font-medium"
                  >
                    {dayjs(user?.doj).format("DD MMM YYYY")}
                  </p>
                </div>
              </div>
            </form>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
