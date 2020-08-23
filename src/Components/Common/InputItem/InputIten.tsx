import React, { useState, ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField/TextField";

export type InputItemPropsType = {
  label: string;
};

export const InputIten = (props: InputItemPropsType) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      value={value}
      label={props.label}
      variant="outlined"
      onChange={handleChange}
    />
  );
};
