import React, { useReducer } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup/ButtonGroup";
import { reducer } from "./State/reducer";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider/Divider";
import TextField from "@material-ui/core/TextField/TextField";
import Typography from "@material-ui/core/Typography/Typography";
import { ButtonItem } from "./Components/Common/ButtonItem/ButtonItem";
import { InputIten } from "./Components/Common/InputItem/InputIten";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: "2px solid black",
      height: "600px",
      margin: "20px ",
    },
    paper: {
      height: "100%",
      background: "tomato",
      border: "2px solid black",
    },
    paperButton: {
      width: "100%",
      height: "150px",
      background: "pink",
      border: "2px solid black",
    },
    grid__item: {
      height: "100%",
    },
    list: {
      width: "100%",
    },
  })
);

function App() {
  const classes = useStyles();
  const initialState = { count: 0 };
  const [counter, dispatchCounter] = useReducer(reducer, initialState);

  return (
    <Grid container justify="space-around">
      <Grid
        item
        className={classes.root}
        xs={5}
        container
        justify="center"
        spacing={4}
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
              <List component="nav" className={classes.list}>
                <Divider />
                <ListItem>
                  <ListItemText primary="Max value" />
                  <InputIten label={"Max value"} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Start value" />
                  <InputIten label={"Start value"} />
                </ListItem>
                <Divider />
              </List>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={11}>
          <Grid
            className={classes.grid__item}
            container
            justify="center"
            alignItems="center"
          >
            <Paper className={classes.paperButton}>
              <Grid
                className={classes.grid__item}
                item
                container
                justify="center"
                alignItems="center"
              >
                <ButtonGroup size="large" variant="contained">
                  <ButtonItem
                    color={"primary"}
                    title={"Set"}
                    onClick={() => alert("Hello")}
                  />
                </ButtonGroup>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.root}
        xs={5}
        container
        justify="center"
        spacing={4}
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
          <Grid
            className={classes.grid__item}
            container
            justify="center"
            alignItems="center"
          >
            <Paper className={classes.paperButton}>
              <Grid
                className={classes.grid__item}
                item
                container
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
    </Grid>
  );
}

export default App;
