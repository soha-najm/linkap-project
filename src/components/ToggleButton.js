import React from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";

const ToggleButton = ({ change, check }) => {
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={check}
              onChange={change}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={<DarkModeTwoToneIcon />}
        />
      </FormGroup>
    </div>
  );
};

export default ToggleButton;
