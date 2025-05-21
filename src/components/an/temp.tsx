import * as React from "react";
import { format, parse, isValid } from "date-fns";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { DayPicker, DropdownProps } from "react-day-picker";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "lucide-react";
export function CustomSelectDropdown(props: DropdownProps) {
  const { options, value, onChange } = props;
  const handleValueChange = (newValue: string) => {
    if (onChange) {
      const syntheticEvent = {
        target: { value: newValue },
      } as React.ChangeEvent<HTMLSelectElement>;
      onChange(syntheticEvent);
    }
  };
  return (
    <Select value={value?.toString()} onValueChange={handleValueChange}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options?.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value.toString()}
              disabled={option.disabled}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export function CustomDropdown({
  selected,
  onSelect,
}: {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
}) {
  return (
    <DayPicker
      captionLayout="dropdown"
      components={{ Dropdown: CustomSelectDropdown }}
      mode="single"
      selected={selected}
      onSelect={onSelect}
      className="bg-white  border rounded-md shadow-md p-3 w-[180px]"
    />
  );
}
export type SelectOption = {
  label: string;
  value: string;
};
type CommitUserData = {
  project: string;
  lines: string;
  commit: string;
  commitname: string;
  date: string;
  name: string;
  selectOptions: SelectOption[];
};
export function CardWithAddUser({
  project,
  lines,
  commit,
  commitname,
  date,
  name,
  selectOptions,
}: CommitUserData) {
  const [dob, setDob] = React.useState<Date | undefined>();
  const [dobInput, setDobInput] = React.useState<string>(""); 
  const handleDateInput = (
    value: string,
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>,
    setInput: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setInput(value);
    try {
      const parsedDate = parse(value, "MM/dd/yyyy", new Date());
      if (isValid(parsedDate)) {
        setDate(parsedDate);
      } else {
        setDate(undefined);
      }
    } catch {
      setDate(undefined);
    }
  };
  React.useEffect(() => {
    setDobInput(dob ? format(dob, "PPP") : "");
  }, [dob]);
  return (
    <Card className="w-[900px] mx-10 my-10 shadow-md  bg-(--an-color-text-Adduser) ">
      <CardHeader>
        <CardTitle className="flex">
          <div className=" ml-2 font-[urbanist] text-(--an-CU-text-cardtitle-color) text-(length:--an-CU-text-cardtite-fontsize) leading-(--an-CU-text-cardtitle-height) font-(--an-CU-text-cardtitle-weight) ">
            Add Commit
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <div className="w-full space-y-1 font-[urbanist]">
              <Label
                htmlFor="project"
                className=" ml-2 capitalize font-[urbanist] text-(--an-CU-text-color) text-(length:--an-CU-text-fontsize) leading-(--an-CU-text-height) font-(--an-CU-text-weight)"
              >
                Project
              </Label>
              <div className=" font-[urbanist] text-(--an-text-doj-color) text-(length:--an-text-firstN-font-size) font-(--an-text-cardtitle-font-weightc) leading-(--an-text-firstN-line-height)">
                <Select>
                    <SelectTrigger
                    id="project"
                  className="w-full ml-2 border-0 border-b-2 border-black/8 shadow-[0_0px_2px_-2px_rgba(0,0,0,0.1)] -mt-0.5 rounded-none px-0">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>  
                  <SelectContent
                    position="popper"
                    className="w-full bg-white shadow-md rounded-md">
                    {selectOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
          <p className=" ml-2 text-(length:--an-text-fontsize-v)  text-(--an-text-color-v) font-[urbanist] ">
                  *{project}
                </p>
              </div>
            </div>
            <div>
              <Label htmlFor="date">
                <div className=" capitalize font-[urbanist] text-(--an-color-text-firstN) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
                  Date
                </div>
              </Label>
              <div className="relative w-full">
                <div className="flex items-center border-b -mt-1 border-black/8">
                  <input
                    id="date"
                    value={dobInput}
                    onChange={(e) =>
                      handleDateInput(e.target.value, setDob, setDobInput)
                    }
                    placeholder="mm/dd/yyyy"
                    className="w-full h-9 px-3 pr-10  focus:outline-none font-[urbanist] text-(--an-text-doj-color) text-(length:--an-text-firstN-font-size) font-(--an-text-cardtitle-font-weightc) leading-(--an-text-firstN-line-height)"
                  />
                  <Popover>
                    <PopoverTrigger asChild>
                      <button type="button" className="p-2">
                        <Calendar />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <CustomDropdown selected={dob} onSelect={setDob} />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <p className="text-(length:--an-text-fontsize-v) text-(--an-text-color-v) font-[urbanist]">
                *{date}
              </p>
            </div>
            <div>
              <Label htmlFor="email">
                <div className=" ml-2 capitalize font-[urbanist] text-(--an-CU-text-color) text-(length:--an-CU-text-fontsize) leading-(--an-CU-text-height) font-(--an-CU-text-weight)">
                  Link Of Codes
                </div>
              </Label>
              <input
                id="email"
                type="email"
                className="w-full ml-2 h-7   border-b border-black/8 focus:outline-none"
              />
              <p className="ml-2 text-(length:--an-text-fontsize-v)  text-(--an-text-color-v) font-[urbanist]">
                *{lines}
              </p>
            </div>
            <div className="ml-3">
              <Label htmlFor="mobile">
                <div className=" capitalize font-[urbanist] text-(--an-CU-text-color) text-(length:--an-CU-text-fontsize) leading-(--an-CU-text-height) font-(--an-CU-text-weight)">
                  Commit Links
                </div>
              </Label>
              <input
                id="mobile"
                className="w-98 h-7 px-2 border-b border-black/8  focus:outline-none"
              />
              <p className="text-(length:--an-text-fontsize-v)  text-(--an-text-color-v) font-[urbanist]">
                *{commit}
              </p>
            </div>
            <div>
              <Label htmlFor="mobile">
                <div className=" ml-2 capitalize font-[urbanist] text-(--an-CU-text-color) text-(length:--an-CU-text-fontsize) leading-(--an-CU-text-height) font-(--an-CU-text-weight)">
                  Commit Name
                </div>
              </Label>
              <input
                id="mobile"
                className="w-full ml-2 h-7 px-2 border-b border-black/8 focus:outline-none"
              />
              <p className=" ml-2 text-(length:--an-text-fontsize-v)  text-(--an-text-color-v) font-[urbanist]">
                *{commitname}
              </p>
            </div>
            <div className="ml-3">
              <Label htmlFor="mobile">
                <div className=" capitalize font-[urbanist] text-(--an-CU-text-color) text-(length:--an-CU-text-fontsize) leading-(--an-CU-text-height) font-(--an-CU-text-weight)">
                  Name
                </div>
              </Label>
              <input
                id="mobile"
                className="w-98 h-7 px-2 border-b border-black/8 focus:outline-none"
              />
              <p className="text-(length:--an-text-fontsize-v)  text-(--an-text-color-v) font-[urbanist]">
                *{name}
              </p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end mt-5 gap-4">
        <Button variant="outline">
          <div className=" capitalize font-[urbanist] text-(--an-color-text-cardfooter) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
            Cancel
          </div>
        </Button>
        <Button className="bg-(--an-text-color-v)  hover:bg-(--an-text-color-hover)">
          <div className=" capitalize font-[urbanist] text-(--an-color-text-Adduser) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
            Add
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
}