import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import RightBarContainer from "./right-bar-container/RightBarContainer";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import AppsIcon from "@material-ui/icons/Apps";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import ShareIcon from "@material-ui/icons/Share";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    right: 0,
    position: "fixed",
    height: "100hv",
    flexDirection: "column",
    margin: "10px 40px",
    alignContent: "center",
    justifyContent: "center",
  },
  meetingName: {
    marginTop: "20px",
    width: "100%",
  },
  featureButton: {
    border: "none",
    backgroundColor: "none",
    cursor: "pointer",
  },
}));

const meetingResourcesArray = [
  "Google Slides",
  "Figma prototype",
  "confluence",
];

const featuresArray = [
  <AccessAlarmIcon color="primary" />,
  // <AppsIcon color="primary" />,
  <ScreenShareIcon color="primary" />,
  <ShareIcon color="primary" />,
  // <PlayCircleFilledIcon color="primary" />,
  // <SportsEsportsIcon />,
];

const participantsArray = ["Gal Gadot", "Natalie Portman", "Gene Simmons "];

export default function RightBar() {
  const classes = useStyles();

  const meetingResources = meetingResourcesArray.map((item) => {
    return (
      <div style={{ margin: "10px" }}>
        <a href="#">{item}</a>
      </div>
    );
  });

  const participants = participantsArray.map((item) => {
    return <div style={{ margin: "10px" }}>{item}</div>;
  });

  const features = featuresArray.map((item) => {
    return (
      <IconButton
        style={{
          margin: "5px",
        }}
        className={classes.featureButton}
      >
        {item}
      </IconButton>
    );
  });

  return (
    <Grid container xs={2} className={classes.root}>
      <RightBarContainer title="Meeting Features" content={features} />
      <RightBarContainer title="Meeting Resources" content={meetingResources} />
      <RightBarContainer title="Participants" content={participants} />
    </Grid>
  );
}
