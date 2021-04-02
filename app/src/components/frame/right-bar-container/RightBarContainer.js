import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "25px",
    padding: "15px",
    borderRadius: "6px",
    backgroundColor: "#E5E5E5",
  },
  container: {
    flexDirection: "column",
  },
  arrowDownButton: {
    margin: "0",
    padding: "0",
  },
}));

export default function RightBarContainer(props) {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.root}>
      <Grid item container className={classes.container}>
        <Grid item>
          {props.title}
          <IconButton
            className={classes.arrowDownButton}
            onClick={props.onClick}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Grid>
        <Grid item>{props.content}</Grid>
        <Grid item>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}
