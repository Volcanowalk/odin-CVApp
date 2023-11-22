import EducationForm from "./EducationForm";
import { useState } from "react";

export default function AddEducation({ addEducation }) {
  const [toggleAddEducation, setToggleAddEducation] = useState(false);

  const toggleAddEducationForm = () => {
    if (toggleAddEducation) {
      setToggleAddEducation(false);
    } else {
      setToggleAddEducation(true);
    }
  };

  const addEducationUpgraded = (education) => {
    addEducation(education);
    setToggleAddEducation(false);
  };

  return (
    <>
      {toggleAddEducation && (
        <EducationForm addEducation={addEducationUpgraded} />
      )}
      {toggleAddEducation && (
        <button onClick={toggleAddEducationForm}>Close</button>
      )}
      {!toggleAddEducation && (
        <button onClick={toggleAddEducationForm}>Add Education</button>
      )}
    </>
  );
}
