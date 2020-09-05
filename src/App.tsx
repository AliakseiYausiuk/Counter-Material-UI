import React, { useReducer } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup/ButtonGroup";
import { reducer } from "./State/reducer";
import Typography from "@material-ui/core/Typography/Typography";
import { ButtonItem } from "./Components/Common/ButtonItem/ButtonItem";
import { ListsItem } from "./Components/Common/ListsItem/ListsItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: "2px solid black",
      height: "600px",
      margin: "20px ",
    },
    paper: {
      height: "100%",
      background: "#FBCEB1",
      border: "2px solid black",
    },
    paperButton: {
      width: "100%",
      height: "150px",
      background: "#FBCEB1",
      border: "2px solid black",
    },
    grid__item: {
      height: "100%",
    },
  })
);

export type initialStateType = {
  count: number;
  minValue: number | string;
  maxValue: number | string;
  errorCounter: boolean;
};

function App() {
  const classes = useStyles();
  const initialState: initialStateType = {
    count: 0,
    minValue: "",
    maxValue: "",
    errorCounter: false,
  };
  const [counter, dispatchCounter] = useReducer(reducer, initialState);

  const changeMinValue = (minValue: number) =>
    dispatchCounter({ type: "MIN-VALUE", minValue: minValue });

  const changeMaxValue = (maxValue: number) =>
    dispatchCounter({ type: "MAX-VALUE", maxValue: maxValue });

  return (
    <Grid container justify="space-around">
      <Grid
        item
        className={classes.root}
        xs={5}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item xs={11}>
          <Paper className={classes.paper}>
            <Grid
              className={classes.grid__item}
              container
              xs={12}
              justify="center"
              alignItems="center"
            >
              <ListsItem
                minValue={counter.minValue}
                maxValue={counter.maxValue}
                changeMinValue={changeMinValue}
                changeMaxValue={changeMaxValue}
                err={counter.errorCounter}
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={11}>
          <Paper className={classes.paperButton}>
            <Grid
              className={classes.grid__item}
              item
              container
              xs={12}
              justify="center"
              alignItems="center"
            >
              <ButtonGroup size="large" variant="contained">
                <ButtonItem
                  color={"primary"}
                  title={"Set"}
                  onClick={() => dispatchCounter({ type: "SET" })}
                />
              </ButtonGroup>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.root}
        xs={5}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item xs={11}>
          <Paper className={classes.paper}>
            <Grid
              className={classes.grid__item}
              container
              xs={12}
              justify="center"
              alignItems="center"
            >
              <Typography variant="h1">{counter?.count}</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={11}>
          <Paper className={classes.paperButton}>
            <Grid
              className={classes.grid__item}
              item
              container
              xs={12}
              justify="center"
              alignItems="center"
            >
              <ButtonGroup size="large" variant="contained">
                <ButtonItem
                  color={"primary"}
                  title={"+"}
                  onClick={() => dispatchCounter({ type: "INCREMENT" })}
                />
                <ButtonItem
                  color={"primary"}
                  title={"-"}
                  onClick={() => dispatchCounter({ type: "DECREMENT" })}
                />
                <ButtonItem
                  color={"primary"}
                  title={"Reset"}
                  onClick={() => dispatchCounter({ type: "RESET" })}
                />
              </ButtonGroup>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
