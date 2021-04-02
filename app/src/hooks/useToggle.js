import { useState } from "react";

export function useToggle(initialValue = false) {
  const [state, setToggle] = useState(initialValue);

  const toggle = () => {
    setToggle(!toggle);
  };
  console.log("clicked");
  return [state, toggle];
}
