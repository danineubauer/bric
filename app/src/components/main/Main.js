import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import avatar1 from "../../assets/avatarSai.png";
import avatar2 from "../../assets/railynAvatar.png";
import avatar3 from "../../assets/andyAvatar.png";
import avatar4 from "../../assets/hannahAvatar.png";
import avatar5 from "../../assets/daniAvatar.png";
import avatar6 from "../../assets/peruAvatar.jpeg";
import avatar7 from "../../assets/kenAvatar.png";
import Participants from "./Participants";
import AgendaButton from "./AgendaButton";
import AgendaWindow from "./PopupWindow";
import GreyBackground from "../../common/GreyBackground";
import PopupWindow from "./PopupWindow";
import SprintButton from "./SprintButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "none",
    margin: "70px 100px",
    // width: "80%",
    // position: "fixed",
    height: "50%",
    // flexDirection: "row",
    // alignContent: "center",
    // justifyContent: "center",
  },
  participantsContainer: {
    display: "flex",
    width: "80%",
    padding: "30px",
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

const agendaContent = <strong>Meeting Agenda</strong>;

const meetingParticipantsArray = [
  { first_name: "Sai", avatar: avatar1 },
  { first_name: "Railyn", avatar: avatar2 },
  { first_name: "Andy", avatar: avatar3 },
  { first_name: "Hannah", avatar: avatar4 },
  { first_name: "Danielle", avatar: avatar5 },
  { first_name: "Peru", avatar: avatar6 },
  { first_name: "Ken", avatar: avatar7 },
];

export default function Main() {
  const classes = useStyles();
  const [showAgenda, setShowAgenda] = useState(false);
  const [showParticipntProfile, setShowParticipantProfile] = useState(false);
  const [showSprint, setShowSprint] = useState(false);

  const [nameIsShown, setNameIsShown] = useState("");
  const [isTalking, setIsTalking] = useState(true);

  const onMouseEnterAvatar = (name, key) => {
    setNameIsShown(name);
  };
  const onMouseLeaveAvatar = (name) => {
    setNameIsShown(false);
  };

  const handleSprintClicked = () => {
    for (let index = 0; index < meetingParticipantsArray.length; index++) {
      const highlightedParticipant = [];
      const participant = meetingParticipantsArray[index];
      setTimeout(() => {
        setHighlightedParticipant(meetingParticipantsArray[index].first_name);
      }, index * 5000);
      setTimeout(() => {
        setHighlightedParticipant("Game Over");
      }, meetingParticipantsArray.length * 5000);
    }
  };
  const [highlightedParticipant, setHighlightedParticipant] = useState();

  const meetingParticipants = meetingParticipantsArray.map((person, index) => {
    return (
      <Grid item key={index} className={classes.participantAvatar}>
        <img
          style={{ borderColor: index === 0 ? "#DC9D4E" : "black" }}
          src={person.avatar}
          className={classes.avatarImage}
          onMouseEnter={() => onMouseEnterAvatar(person.first_name)}
          onMouseLeave={() => onMouseLeaveAvatar(person.first_name)}
        />
        {person.first_name === nameIsShown ? (
          <Typography className={classes.participantNameFeature}>
            {person.first_name}
          </Typography>
        ) : null}
      </Grid>
    );
  });
  return (
    <Grid container xs={8} className={classes.root}>
      {showAgenda ? <GreyBackground /> : null}

      <Typography align="left" variant="h4">
        Ideation Meeting
      </Typography>
      <AgendaButton showAgenda={() => setShowAgenda(!showAgenda)} />
      <SprintButton sprintButtonClicked={() => handleSprintClicked()} />
      <Typography variant="h4">{highlightedParticipant}</Typography>
      {showAgenda ? (
        <PopupWindow
          content={agendaContent}
          handleExit={() => setShowAgenda(!showAgenda)}
        />
      ) : null}
      {showParticipntProfile ? (
        <PopupWindow
          content={"Participant Profile"}
          handleExit={() => setShowParticipantProfile(!showParticipntProfile)}
        />
      ) : null}
      {showSprint ? "Sprint" : null}

      <Participants
        showParticipants={() =>
          setShowParticipantProfile(!showParticipntProfile)
        }
      />
    </Grid>
  );
}
