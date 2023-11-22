import "../../styles/Education.css";
import EducationItem from "./EducationItem";
import AddEducation from "./AddEducation";
import { useState } from "react";

function Education({ educations, setEducations }) {
  const [toggleEducation, setToggleEducation] = useState(false);

  const toggleEducationSection = () => {
    if (toggleEducation) {
      setToggleEducation(false);
    } else {
      setToggleEducation(true);
    }
  };

  return (
    <div className="div-education">
      <h2 onClick={toggleEducationSection}>Education</h2>
      {toggleEducation && (
        <div className="education-items">
          <AddEducation />
        </div>
      )}
    </div>
  );
}

export default Education;
