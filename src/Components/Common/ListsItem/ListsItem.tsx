import React from "react";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider/Divider";
import { InputIten } from "../InputItem/InputIten";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      width: "100%",
    },
  })
);

export type ListsItemPropsType = {
  minValue: number | string;
  maxValue: number | string;
  changeMinValue: (minValue: number) => void;
  changeMaxValue: (maxValue: number) => void;
  err: boolean;
};

export const ListsItem = (props: ListsItemPropsType) => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <Divider />
      <ListItem>
        <ListItemText primary="Max value" />
        <InputIten
          label={"Max value"}
          value={props.maxValue}
          changeValue={props.changeMaxValue}
          err={props.err}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Min value" />
        <InputIten
          label={"Min value"}
          value={props.minValue}
          changeValue={props.changeMinValue}
          err={props.err}
        />
      </ListItem>
      <Divider />
    </List>
  );
};
