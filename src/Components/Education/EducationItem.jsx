import { useState } from "react";

export default function EducationItem() {
  const [toggle, setToggle] = useState(true);

  const toggleForm = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <>
      {toggle && <button onClick={toggleForm}>Close</button>}
      {toggle && <button>Add</button>}
    </>
  );
}
