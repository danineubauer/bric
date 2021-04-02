import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/logo.png";
import RightBarContainer from "./right-bar-container/RightBarContainer";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    margin: "10px",
    right: 0,
    width: "20%",
    position: "fixed",
    height: "100vh",
    flexDirection: "column",
    // display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
}));

export default function RightBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <RightBarContainer title="Meeting Resources" />
      <RightBarContainer title="Participants" />

      {/* <MeetingResources />
      <Participants /> */}
    </div>
  );
}
