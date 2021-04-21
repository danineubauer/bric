import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "none",
    margin: "0px 30px",
  },
}));

export default function SecondaryButton(props) {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={props.showAgenda}
      className={classes.root}
    >
      {props.children}
    </Button>
  );
}
