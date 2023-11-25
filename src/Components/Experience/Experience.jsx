import { useState } from "react";
import "../../styles/Experience.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExperienceForm from "./ExperienceForm";

function Experience({ experiences, setExperiences }) {
  const [toggleContent, setToggleContent] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);
  const [experience, setExperience] = useState();

  function handleToggle() {
    setToggleContent((toggle) => !toggle);
    if (!toggleContent) {
      setToggleForm(false);
    }
  }

  function handleClick(data) {
    if (data) {
      setExperience(data);
    } else {
      setExperience(null);
    }
    setToggleForm((toggle) => !toggle);
  }

  function handleAdd(newExperience) {
    setExperiences([...experiences, newExperience]);
    setToggleForm(false);
  }

  function handleDelete(id) {
    let newList = experiences.filter((experience) => experience.id != id);
    setExperiences(newList);
    setToggleForm(false);
  }

  function handleEdit(data) {
    console.log(data);
    //Get index
    //Make a new array of IDs and get an index of the ID
    const index = experiences
      .map((experience) => experience.id)
      .indexOf(data.id);
    //Replace with updated object
    experiences.splice(index, 1, data);
    setExperiences([...experiences]);
    setToggleForm(false);
  }

  return (
    <div className="div-experience">
      <div className="div-experience-header" onClick={handleToggle}>
        <h2>Experience</h2>
        <KeyboardArrowDownIcon
          className={toggleContent ? "rotate-arrow" : null}
        />
      </div>
      {toggleContent && (
        <div className="div-experience-content">
          {!toggleForm && (
            <>
              {experiences.map((experience) => {
                return (
                  <div
                    key={experience.id}
                    onClick={() => handleClick(experience)}
                    className="div-experience-item"
                  >
                    {experience.company} - {experience.position}
                  </div>
                );
              })}
            </>
          )}
          {!toggleForm && (
            <button onClick={() => handleClick(null)}>Add Experience</button>
          )}
          {toggleForm && (
            <ExperienceForm
              experience={experience}
              handleAdd={handleAdd}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )}
          {toggleForm && (
            <button onClick={() => handleClick(null)}>Close</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Experience;
