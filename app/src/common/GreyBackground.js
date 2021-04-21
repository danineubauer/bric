import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  greyBackground: {
    backgroundColor: "#a55c1b",
    backgroundImage: "linear-gradient(315deg, #a55c1b 0%, #000000 74%)",
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
    opacity: ".8",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
}));
export default function GreyBackground(props) {
  const classes = useStyles();
  return <Paper className={classes.greyBackground}></Paper>;
}
