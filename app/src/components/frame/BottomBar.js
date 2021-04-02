import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import { IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MicOffIcon from "@material-ui/icons/MicOff";
import MicNoneIcon from "@material-ui/icons/MicNone";
import { useToggle } from "../../hooks/useToggle";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    height: "80px",
    alignContent: "center",
  },
  leaveButton: {
    position: "fixed",
    left: 0,
    padding: "20px",
    fontWeight: "700",
    fontSize: "1em",
    color: "#757575",
  },
  exitIcon: {
    transform: "rotate(180deg)",
    rotate: "90deg",
  },
}));

export default function BottomBar() {
  const classes = useStyles();
  const [mute, toggleMute] = useState(false);
  const [video, toggleVideo] = useState(true);
  const [leaveHover, setLeaveHover] = useState(false);

  return (
    <AppBar className={classes.appbar}>
      <Grid container justify="center" style={{ height: "300px" }}>
        <Button className={classes.leaveButton}>
          <ExitToAppIcon fontSize="large" className={classes.exitIcon} />
        </Button>

        <Grid item>
          {video ? (
            <IconButton onClick={() => toggleVideo(!video)}>
              <VideocamIcon fontSize="large" />
            </IconButton>
          ) : (
            <IconButton onClick={() => toggleVideo(!video)}>
              <VideocamOffIcon fontSize="large" />
            </IconButton>
          )}
        </Grid>

        <Grid item>
          {mute ? (
            <IconButton onClick={() => toggleMute(!mute)}>
              <MicNoneIcon fontSize="large" />
            </IconButton>
          ) : (
            <IconButton onClick={() => toggleMute(!mute)}>
              <MicOffIcon fontSize="large" />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </AppBar>
  );
}
