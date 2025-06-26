import React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface MultiCheckboxFormProps {
  inputs: Array<React.ReactNode | string>;
}

const MultiCheckboxForm: React.FC<MultiCheckboxFormProps> = ({ inputs }) => {
  const renderInputs = () => {
    return inputs.map((input) => {
      return (
        <FormControlLabel
          label={input}
          control={<Checkbox />}
          sx={{
            ".MuiFormControlLabel-label": {
              flex: 1,
            },
          }}
        />
      );
    });
  };
  return (
    <>
      <Box padding="1em" display="flex" flexDirection="column">
        {renderInputs()}
      </Box>
    </>
  );
};

export default MultiCheckboxForm;
