import { useState } from "react";
import EducationForm from "./EducationForm";

export default function EducationItem({
  education,
  deleteEducation,
  editEducation,
}) {
  const [toggle, setToggle] = useState(false);

  const toggleForm = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const editEducationUpgraded = (education) => {
    editEducation(education);
    //Close the form
    setToggle(false);
  };

  return (
    <div className="item-education">
      {!toggle && (
        <div onClick={toggleForm} className="educationItem">
          {education.school} - {education.study}
        </div>
      )}
      {toggle && (
        <EducationForm
          education={education}
          deleteEducation={deleteEducation}
          editEducation={editEducationUpgraded}
        />
      )}
      {toggle && <button onClick={toggleForm}>Close</button>}
    </div>
  );
}
