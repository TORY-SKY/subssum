import MTN from "../src/assets/networkprovider/mtn.svg";
import Airtel from "../src/assets/networkprovider/airtel-nigeria.svg";
import Glo from "../src/assets/networkprovider/globacom-limited.svg";
import NineMobile from "../src/assets/networkprovider/9mobile.svg";
import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  Box,
  Typography,
  SelectChangeEvent,
} from "@mui/material";

// Import other icons as needed
// type Option = {
//   value: string;
//   label: string;
//   icon: string; // URL to the image
// };
type PlatformOption = {
  icon: string;
  label: string;
  value: string;
};

const options: PlatformOption[] = [
  {
    icon: MTN,
    label: "MTN",
    value: "MTN",
  }, // GitHub dark background
  {
    icon: Airtel,
    label: "Airtel",
    value: "Airtel",
  },
  {
    icon: Glo,
    label: "Glo",
    value: "Glo",
  },
  {
    icon: NineMobile,
    label: "9Mobile",
    value: "9Mobile",
  },
];
interface CustomDropdownProps {
  onChange: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl
      fullWidth
      variant="outlined"
      style={{
        border: "1px solid #C7DBEF",
        backgroundColor: "white",
        height: "50px",
        width: "220px",
        overflow: "hidden",
        padding: "0",
        borderRadius: "8px",
      }}
    >
      {/* <InputLabel id="custom-dropdown-label">Select Network</InputLabel> */}
      <Select
        style={{
          border: "transparent",
        }}
        labelId="custom-dropdown-label"
        value={selectedValue}
        onChange={handleChange}
        renderValue={(selected) => {
          const selectedOption = options.find(
            (option) => option.value === selected
          );
          return (
            <Box display="flex" alignItems="center" border="none">
              {selectedOption && (
                <>
                  <img
                    src={selectedOption.icon}
                    alt={selectedOption.label}
                    style={{ width: 25, height: 25, marginRight: 8 }}
                  />
                  <Typography>{selectedOption.label}</Typography>
                </>
              )}
            </Box>
          );
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Box display="flex" alignItems="center">
              <img
                src={option.icon}
                alt={option.label}
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              <Typography>{option.label}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomDropdown;
