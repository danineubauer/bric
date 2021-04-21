import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "15px 0px",
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
    cursor: "pointer",
  },
  addFile: {
    cursor: "pointer",
  },
  content: {},
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
            <ExpandMoreIcon onClick={props.onClick} />
          </IconButton>
        </Grid>
        <Grid item className={classes.content}>
          {props.content}
        </Grid>
        <Grid item>
          <IconButton className={classes.addFile}>
            <AddCircleIcon onClick={props.onClick} />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}
