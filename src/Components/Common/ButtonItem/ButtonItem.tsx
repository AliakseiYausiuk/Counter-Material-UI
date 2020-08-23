import React from "react";
import Button from "@material-ui/core/Button/Button";

export type ButtonPropsType = {
  title: string;
  onClick: () => void;
  color: "inherit" | "default" | "primary" | "secondary" | undefined;
};

export const ButtonItem = (props: ButtonPropsType) => {
  return (
    <Button color={props.color} onClick={props.onClick}>
      {props.title}
    </Button>
  );
};
