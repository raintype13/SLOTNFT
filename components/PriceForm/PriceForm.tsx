import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const PriceForm: React.FC = () => {
  const [currency, setCurrency] = useState<"usd" | "eth">("usd");
  return (
    <Box padding="1em">
      <div>
        <Select
          fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          label="Age"
          onChange={(item) => {
            setCurrency(item.target.value as "usd" | "eth");
          }}
        >
          <MenuItem value={"usd"}>$(USD)</MenuItem>
          <MenuItem value={"eth"}>BTC</MenuItem>
        </Select>
      </div>
      <Box display="flex" alignItems="center" marginTop="1em">
        <TextField label="Min" type="number" />
        <Box padding="1em">to</Box>
        <TextField label="Max" type="number" />
      </Box>
    </Box>
  );
};

export default PriceForm;
