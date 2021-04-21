import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
    margin: "10% 20%",
    padding: "20px",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    flexDirection: "column",
  },
  content: {
    justifyContent: "center",
    alignSelf: "center",
  },
  leaveButton: {
    color: "red",
    opacity: ".8",
  },
  editPen: {
    color: "green",
    opacity: ".8",
  },
  buttons: {
    position: "absolute",
    bottom: "0",
    right: "0",
    margin: "30px",
  },
}));
export default function PopupWindow(props) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.content}>{props.content}</div>
      <div className={classes.buttons}>
        <IconButton className={classes.editPen} onClick={props.handleEdit}>
          <CreateIcon fontSize="large" />
        </IconButton>
        <IconButton className={classes.leaveButton} onClick={props.handleExit}>
          <CancelIcon fontSize="large" />
        </IconButton>
      </div>
    </Paper>
  );
}
