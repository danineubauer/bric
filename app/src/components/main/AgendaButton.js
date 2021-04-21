import React, { useState } from "react";
import SecondaryButton from "../../library/SecondaryButton";

export default function AgendaButton(props) {
  return (
    <SecondaryButton showAgenda={props.showAgenda}>Agenda</SecondaryButton>
  );
}
