import EducationForm from "./EducationForm";
import { useState } from "react";

export default function AddEducation() {
  const [toggleAddEducation, setToggleAddEducation] = useState(false);

  const toggleAddEducationForm = () => {
    if (toggleAddEducation) {
      setToggleAddEducation(false);
    } else {
      setToggleAddEducation(true);
    }
  };

  return (
    <>
      {toggleAddEducation && <EducationForm />}
      {toggleAddEducation && (
        <button onClick={toggleAddEducationForm}>Close</button>
      )}
      {toggleAddEducation && (
        <button onClick={toggleAddEducationForm}>Add</button>
      )}
      {!toggleAddEducation && (
        <button onClick={toggleAddEducationForm}>Add Education</button>
      )}
    </>
  );
}
