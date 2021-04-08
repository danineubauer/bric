import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/logo.png";
import { participants } from "../../common/participants";
import Typography from "@material-ui/core/Typography";
import avatar1 from "../../assets/avatarSai.png";
import avatar2 from "../../assets/avatarSai.png";
import avatar3 from "../../assets/avatarSai.png";
import avatar4 from "../../assets/avatarSai.png";
import avatar5 from "../../assets/avatarSai.png";
import avatar6 from "../../assets/avatarSai.png";
import avatar7 from "../../assets/avatarSai.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "none",
    margin: "70px 100px",
    width: "80%",
    position: "fixed",
    height: "75%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  participantsContainer: {
    display: "flex",
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  participantAvatar: {
    width: "fit-content",
    height: "fit-content",
    borderRadius: "10px",
    margin: "20px 30px 0px 40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  avatarImage: {
    height: "140px",
    width: "auto",
    borderRadius: "100px",
    border: "4px solid #333",
    boxShadow: "0 2.8px 3px rgba(0, 0, 0, 0.4)",
    cursor: "pointer",
    "&:hover": {
      border: "4px solid black",
      boxShadow: "0 2.8px 3px rgba(0, 0, 0, 0.7)",
      opacity: "0.7",
      transition: "0.5s ease",
    },
    "&:hover participantNameFeature": {
      visibility: "visible",
      transition: "0.5s ease",
    },
  },
  participantNameFeature: {
    position: "absolute",
    height: "fit-content",
    marginBottom: "10px",
  },
}));

const meetingParticipantsArray = [
  { first_name: "Sai", avatar: avatar1 },
  { first_name: "Danielle", avatar: avatar2 },
  { first_name: "Hannah", avatar: avatar3 },
  { first_name: "Rylan", avatar: avatar4 },
  { first_name: "Andy", avatar: avatar5 },
  { first_name: "Ken", avatar: avatar6 },
  { first_name: "Peru", avatar: avatar7 },
];

export default function Main() {
  const classes = useStyles();
  const [nameIsShown, setNameIsShown] = useState(false);

  const meetingParticipants = meetingParticipantsArray.map((person, index) => {
    return (
      <Grid item key={index} className={classes.participantAvatar}>
        <img
          src={person.avatar}
          className={classes.avatarImage}
          onMouseEnter={(index) => setNameIsShown(true)}
          onMouseLeave={(index) => setNameIsShown(false)}
        />
        {nameIsShown ? (
          <Typography className={classes.participantNameFeature}>
            {person.first_name}
          </Typography>
        ) : null}
      </Grid>
    );
  });
  return (
    <div className={classes.root}>
      <Typography align="left" variant="h4">
        Ideation Meeting
      </Typography>
      <Grid container xs={12} className={classes.participantsContainer}>
        {meetingParticipants}
      </Grid>
    </div>
  );
}
