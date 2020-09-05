import React, { useState, ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField/TextField";

export type InputItemPropsType = {
  label: string;
  changeValue: (value: number) => void;
  value: number | string;
  err: boolean;
};

export const InputIten = (props: InputItemPropsType) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.changeValue(Number(event.currentTarget.value));
  };

  return (
    <TextField
      error={props.err}
      helperText={props.err ? "Enter the correct number" : ""}
      value={props.value}
      label={props.label}
      variant="outlined"
      onChange={handleChange}
    />
  );
};
