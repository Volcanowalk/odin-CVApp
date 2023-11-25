import "../../styles/Education.css";
import EducationItem from "./EducationItem";
import AddEducation from "./AddEducation";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Education({ educations, setEducations }) {
  const [toggleEducation, setToggleEducation] = useState(false);

  const toggleEducationSection = () => {
    if (toggleEducation) {
      setToggleEducation(false);
    } else {
      setToggleEducation(true);
    }
  };

  const addEducation = (newEducation) => {
    //Make a new array for re-rendering
    let newList = [...educations, newEducation];
    setEducations(newList);
  };

  const deleteEducation = (id) => {
    let newList = educations.filter((education) => education.id != id);
    setEducations(newList);
  };

  const editEducation = (newEducation) => {
    //Get index
    //Make a new array of IDs and get an index of the ID
    const index = educations
      .map((education) => education.id)
      .indexOf(newEducation.id);
    //Replace with updated object
    educations.splice(index, 1, newEducation);
    setEducations([...educations]);
  };

  return (
    <div className="div-education">
      <div className="education-header" onClick={toggleEducationSection}>
        <h2>Education</h2>
        <KeyboardArrowDownIcon
          className={toggleEducation ? "rotate-arrow" : null}
        />
      </div>
      <div
        className="education-content"
        style={{ display: toggleEducation ? "block" : "none" }}
      >
        {toggleEducation &&
          educations.map((education) => (
            <EducationItem
              key={education.id}
              education={education}
              deleteEducation={deleteEducation}
              editEducation={editEducation}
            />
          ))}
        {toggleEducation && (
          <div className="add-education">
            <AddEducation addEducation={addEducation} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Education;
