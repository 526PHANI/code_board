import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Avatar, AvatarImage } from "../ui/avatar";

export function ViewProfile() {
  return (
    <Card className="w-(--an-profile-width) p-(--an-profile-padding) items-start rounded-(--an-profile-border-radius) bg-(--an-profile-background) m-5">
      <div className="flex">
        <div className="pt-4">
          <Avatar className="w-(--an-profile-avatar-size) h-(--an-profile-avatar-size) object-cover">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
        </div>

        <div className="flex flex-col">
          <CardHeader>
            <div className="flex gap-(--an-profile-header-gap) items-start">
              <CardTitle className="text-(--an-profile-text-color) font-urbanist text-(length:--an-profile-title-text-size) font-(--an-profile-text-weight)">
                Riti Shan
              </CardTitle>
              <div className="rounded-(--an-profile-active-border-radius) bg-(--an-profile-active-bg) flex justify-center items-center px-4 py-1 h-(--an-profile-active-height) mt-1.5">
                <span className="text-(--an-profile-active-color) font-urbanist text-(length:--an-profile-active-text-size) font-(--an-profile-text-weight)">
                  Active
                </span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="mt-2">
            <form className="flex flex-col items-start gap-(--an-profile-form-gap)">
              <div className="flex flex-start gap-(--an-profile-form-div-gap) self-stretch">
                <div className="flex flex-col w-(--an-profile-form-div-width) justify-center align-start">
                  <Label
                    htmlFor="email"
                    className="text-(--an-profile-label-color) font-urbanist text-(length:--an-profile-text-size) font-(--an-profile-label-weight)"
                  >
                    Email
                  </Label>
                  <p
                    id="email"
                    className="text-(--an-profile-text-color) font-urbanist text-(length:--an-profile-text-size) font-(--an-profile-text-weight)"
                  >
                    ritishan123@gmail.com
                  </p>
                </div>
                <div className="flex flex-col w-(--an-profile-form-div-width) justify-center align-start">
                  <Label
                    htmlFor="mobile"
                    className="text-(--an-profile-label-color) font-urbanist text-(length:--an-profile-text-size) font-(--an-profile-label-weight)"
                  >
                    Mobile
                  </Label>
                  <p
                    id="mobile"
                    className="text-(--an-profile-text-color) font-urbanist text-(length:--an-profile-text-size) font-(--an-profile-text-weight)"
                  >
                    9123456789
                  </p>
                </div>
                <div className="flex flex-col w-(--an-profile-form-div-width) justify-center align-start">
                  <Label
                    htmlFor="designation"
                    className="text-(--an-profile-label-color) font-urbanist text-(length:--an-profile-text-size) font-(--an-profile-label-weight)"
                  >
                    Designation
                  </Label>
                  <p
                    id="designation"
                    className="text-(--an-profile-text-color) font-urbanist text-(length:--an-profile-text-size) font-(--an-profile-text-weight)"
                  >
                    Frontend Developer
                  </p>
                </div>
              </div>
              <div className="flex flex-start gap-(--an-profile-form-div-gap) self-stretch">
                <div className="flex flex-col w-(--an-profile-form-div-width) justify-center align-start">
                  <Label
                    htmlFor="birth"
                    className="text-(--an-profile-label-color) font-urbanist text-(length:--an-profile-text-size) font-(--an-profile-label-weight)"
                  >
                    Date Of Birth
                  </Label>
                  <p
                    id="email"
                    className="text-(--an-profile-text-color) font-urbanist text-(length:--an-profile-text-size) font-(--an-profile-text-weight)"
                  >
                    26 March 2003
                  </p>
                </div>
                <div className="flex flex-col w-(--an-profile-form-div-width) justify-center align-start">
                  <Label
                    htmlFor="joining"
                    className="text-(--an-profile-label-color) font-urbanist text-(length:--an-profile-text-size) font-(--an-profile-label-weight)"
                  >
                    Date Of Joining
                  </Label>
                  <p
                    id="mobile"
                    className="text-(--an-profile-text-color) font-urbanist text-(length:--an-profile-text-size) font-(--an-profile-text-weight)"
                  >
                    03 April 2024
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
