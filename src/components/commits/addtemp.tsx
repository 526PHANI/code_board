import * as React from "react";
import { CardWithAddUser, SelectOption } from "../an/temp"; // Adjust import path

export default function AddTemp() {
 
  const selectOptions: SelectOption[] = [
    { label: "Website Redesign", value: "website-redesign" },
    { label: "Mobile App Development", value: "mobile-app" },
    { label: "API Integration", value: "api-integration" },
    { label: "Database Migration", value: "db-migration" },
  ];






  return (
  
      
      
        <CardWithAddUser
          project="Select the project this "
          lines="Paste the link to your code "
          commit="Provide the direct "
          commitname="Enter a descriptive name "
          date="Select the date when this commit "
          name="Enter your full "
          selectOptions={selectOptions}
        />
        

  );
}

